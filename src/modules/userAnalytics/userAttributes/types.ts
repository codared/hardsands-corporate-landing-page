export interface ThesisCookie {
  initial_url: string
  initial_path: string
  initial_timestamp: number

  recent_url: string
  recent_path: string
  recent_timestamp: number

  initial_utm: Record<string, string>
  recent_utm: Record<string, string>
}

export const THESIS_PAGEVIEW_COOKIE = 'thesis_pageview'
