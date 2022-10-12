import { LIFECYCLE_EVENT, EventParameters } from '../lifecycle/types'

export type TraitValue = string | number | boolean | null

export type TraitData = {
  key: string
  value: TraitValue
}

export type JsonPrimitive = string | number | boolean | null
export type JsonSerializable = JsonPrimitive | JsonObject | JsonArray
export type JsonObject = { [member: string]: JsonSerializable }
export interface JsonArray extends Array<JsonSerializable> {}

/**
 * A `UserAttribute` computes user data that will be persisted.
 */
export interface UserAttribute<T extends JsonSerializable = JsonSerializable> {
  /**
   * The key that will identify this collection of user data. Must be unique
   * accross the application.
   */
  key: string

  /**
   * The sticky flag denotes whether this attributes will be saved in a cookie
   * and recovered on the next page load.
   * Defaults to `true`
   */
  persistent?: boolean

  /**
   * This function will be called to compute the user's data. It will receive
   * the data that's currently stored as a parameter.
   */
  computeFn<K extends LIFECYCLE_EVENT>(
    existing: T | null,
    atts: EventParameters[K],
    event: K
  ): Promise<T> | T

  /**
   * Which lifecycle events should re-compute the data.
   */
  computeOn: LIFECYCLE_EVENT[]

  /**
   * Traits are the flattened version of the computed data that will be
   * attached to the user in Amplitude and other analytics platforms.
   */
  getTraits: (state: T) => TraitData[]
}

export type UserStateData = { [key: string]: JsonSerializable }
