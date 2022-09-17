
export type InitializedWindow = typeof window & {
  pangaeaAnalyticsDebugger: {
    push(cmd: Record<string, any>): void
  }
}

let win: any = {}
if (process.browser) {
  win = window as InitializedWindow
  win.pangaeaAnalyticsDebugger = win.pangaeaAnalyticsDebugger || []
}

type PushCommand = { type: string } & Record<string, any>

const debugPush = (cmd: PushCommand) => {
  win.pangaeaAnalyticsDebugger.push(cmd)
}

export const debugPageView = (eventData: Record<string, any> = {}) => {
  debugPush({
    type: 'pageview',
    event_data: eventData,
  })
}

export const debugIdentify = (user_id: string) => {
  debugPush({
    type: 'identify',
    user_id,
  })
}

export const debugTrackPurchase = (eventData: Record<string, any>) => {
  debugPush({
    type: 'event',
    event_name: 'purchase',
    event_data: eventData,
  })
}
