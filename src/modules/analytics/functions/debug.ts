
export type InitializedWindow = typeof window & {
  analyticsDebugger: {
    push(cmd: Record<string, any>): void
  }
}

let win: any = {}
if (process.browser) {
  win = window as InitializedWindow
  win.analyticsDebugger = win.analyticsDebugger || []
}

type PushCommand = { type: string } & Record<string, any>

const debugPush = (cmd: PushCommand) => {
  win.analyticsDebugger.push(cmd)
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
