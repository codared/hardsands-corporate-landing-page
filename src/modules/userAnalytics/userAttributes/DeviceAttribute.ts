import UAParser from 'ua-parser-js'

import { UserAttribute } from '../userState/types'

type DeviceAttributeState = {
  screenWidth: number
  screenHeight: number
  os: string
  osVersion: string
  browserName: string
  browserVersion: string
  deviceType: string
  deviceVendor: string
}

export const DeviceAttribute: UserAttribute<DeviceAttributeState> = {
  key: 'device',
  persistent: false,
  computeOn: ['firstLoad'],

  getTraits(state: DeviceAttributeState) {
    return [
      { key: 'screen_width', value: state.screenWidth },
      { key: 'screen_height', value: state.screenHeight },
      { key: 'device_type', value: state.deviceType },
      { key: 'device_vendor', value: state.deviceVendor },
      { key: 'os', value: state.os },
      { key: 'os_version', value: state.osVersion },
      { key: 'browser', value: state.browserName },
      { key: 'browser_version', value: state.browserVersion },
    ]
  },

  computeFn() {
    const ua = UAParser(window.navigator.userAgent)
    return {
      screenWidth: screen.width,
      screenHeight: screen.height,
      os: ua.os.name || 'unknown',
      osVersion: ua.os.version || 'unknown',
      deviceType: ua.device.type || 'unknown',
      deviceVendor: ua.device.vendor || 'unknown',
      browserName: ua.browser.name || 'unknown',
      browserVersion: ua.browser.version || 'unknown',
    }
  },
}
