import { UserState } from "modules/userAnalytics/userState/UserState"
import { TraitValue } from "modules/userAnalytics/userState/types"
import { trackUserTraits } from "./events"
import config from "core/config"



class MeridianUserState extends UserState {
  cookieDomain = config('COOKIE_DOMAIN')

  constructor() {
    super()

    if (typeof window !== 'undefined') {
      const win = window as Window & { userState?: MeridianUserState }
      win.userState = this
    }
  }

  // notify other analytics tools about user traits changing
  onUserTraitsChange(traits: Record<string, TraitValue>) {
    // console.log('userState - tracking user traits', traits)
    trackUserTraits(traits)
  }
}

export const userState = new MeridianUserState()
