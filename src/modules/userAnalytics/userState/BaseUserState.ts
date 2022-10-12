import { LIFECYCLE_EVENT, EventParameters } from '../lifecycle/types'
import { findDuplicateValues } from '../utils/array'
import { getCookie, setCookie } from '../utils/cookie'
import { debounce } from '../utils/debounce'
import { isPromise } from '../utils/types'
import { UserStateData, UserAttribute, TraitData, TraitValue } from './types'

export abstract class BaseUserState {
  public initialTraitsPromise: Promise<void>

  protected cookieName = 'userState'

  protected initialTraitsTimeout: number = 2000

  protected cookieDomain = '.luminskin.com'

  private userState: UserStateData

  private attributes: UserAttribute[] = []

  // promise state / resolves for `firstLoad` and initial `pageView`
  private isInitialPageViewResolved = false
  private resolveInitialPageViewPromise: () => void

  private isFirstLoadResolved = false
  private resolveFirstLoadPromise: () => void

  debouncedSave: (data: UserStateData) => void

  constructor() {
    const initialPageViewPromise = new Promise<void>((resolve) => {
      this.resolveInitialPageViewPromise = () => {
        if (!this.isInitialPageViewResolved) {
          resolve()
          this.isInitialPageViewResolved = true
        }
      }
    })

    const timeoutPromise = new Promise<void>((resolve) => {
      if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
          setTimeout(() => {
            resolve()
          }, this.initialTraitsTimeout)
        })
      }
    })

    const firstLoadPromise: Promise<void> = new Promise((resolve) => {
      this.resolveFirstLoadPromise = () => {
        if (!this.isFirstLoadResolved) {
          resolve()
          this.isFirstLoadResolved = true
        }
      }
    })

    this.initialTraitsPromise = Promise.race([
      Promise.all([firstLoadPromise, initialPageViewPromise]),
      timeoutPromise,
    ]).then(() => {
      // satisfy Promise<void> of initialTraitsPromise
    })

    this.userState = this.load()
    this.attributes = this.getAttributes()
    const duplicateKeys = findDuplicateValues(this.attributes.map((a) => a.key))

    if (duplicateKeys.length) {
      throw new Error(
        `Attributes' keys "${duplicateKeys.join(',')}" are not unique`
      )
    }

    this.debouncedSave = debounce(this.save.bind(this), 100)
  }

  abstract getAttributes(): UserAttribute[]

  getUserState(): UserStateData {
    return this.userState
  }

  async handle<T extends LIFECYCLE_EVENT>(
    event: T,
    params: EventParameters[T]
  ) {
    const attributes = this.attributes.filter((attribute) => {
      return attribute.computeOn.includes(event)
    })

    if (!attributes.length) {
      return
    }

    const promises = attributes
      .map((attribute) => {
        const existing = this.userState[attribute.key]
        const computed = attribute.computeFn(existing, params, event)

        // We need this because `await` **always** enqueues the rest of the
        // function and we need to process synchronous attributes immediately
        if (isPromise(computed)) {
          return computed.then((val) => {
            this.userState[attribute.key] = val
          })
        }

        this.userState[attribute.key] = computed
        return false
      })
      .filter((p): p is Promise<void> => !!p)

    // Trigger this after processing every synchronous attribute because we we
    // want to send their traits without waiting for async ones.
    this.triggerTraitsChange()

    if (promises.length) {
      await Promise.all(promises)
      this.triggerTraitsChange()
    }

    this.onUserStateChange(this.userState)
    this.debouncedSave(this.userState)

    if (event === 'firstLoad') {
      this.resolveFirstLoadPromise()
    }
    if (event === 'pageView') {
      this.resolveInitialPageViewPromise()
    }
  }

  /**
   * This and getTraits are now the same, getFlatTraits was legacy.
   * Before traits were returned as {key, value}[] now they are always
   * returned as {[key: string]: TraitValue}
   */
  public getFlatTraits(): Record<string, TraitValue> {
    return this.flattenTraits(this.getRawTraits())
  }

  public getTraits(): Record<string, TraitValue> {
    return this.getFlatTraits()
  }

  /**
   * @deprecated
   */
  public isAsyncUserStateResolved() {
    return this.isFirstLoadResolved
  }

  /**
   * Transforms `[{ key, value }]` to `{ [key]: value }`
   */
  protected flattenTraits(traits: TraitData[]): Record<string, TraitValue> {
    return traits.reduce(
      (acc, trait): Record<string, TraitValue> => ({
        ...acc,
        [trait.key]: trait.value,
      }),
      {}
    )
  }

  protected getRawTraits(): TraitData[] {
    return this.attributes.reduce<TraitData[]>((carry, attribute) => {
      const value = this.userState[attribute.key]

      if (value === null || value === undefined) {
        return carry
      }

      attribute.getTraits(value).forEach((trait) => carry.push(trait))

      return carry
    }, [])
  }

  private triggerTraitsChange() {
    this.onUserTraitsChange(this.getFlatTraits())
  }

  protected onUserTraitsChange(_traits: Record<string, TraitValue>) {
    // This is intentional
  }

  protected onUserStateChange(_userState: UserStateData) {
    // This is intentional
  }

  protected load(): UserStateData {
    try {
      return JSON.parse(getCookie(this.cookieName) || '{}')
    } catch (e) {
      return {}
    }
  }

  protected async save(data: UserStateData): Promise<boolean> {
    const stickyData: UserStateData = {}

    for (const [key, value] of Object.entries(data)) {
      const attribute = this.attributes.find((att) => att.key === key)

      if (!attribute) {
        console.error(`Unknown attribute ${attribute}. This should not happen`)
        continue
      }

      if (attribute.persistent === false) {
        continue
      }

      stickyData[key] = value
    }

    setCookie(this.cookieName, JSON.stringify(stickyData), 90)
    return true
  }
}
