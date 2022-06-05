import { AnyDict } from './types'

export const loadScript = (() => {
  // Index to only load the same script once.
  const loadedScripts: { [src: string]: Promise<void> } = {}

  return async function loadScript(
    src: string,
    toLoad: AnyDict = {}
  ): Promise<void> {
    Object.keys(toLoad).forEach((key) => {
      window[key] = toLoad[key]
    })

    if (!loadedScripts[src]) {
      loadedScripts[src] = new Promise((resolve) => {
        let r = false
        const s: any = document.createElement('script')
        s.type = 'text/javascript'
        s.src = src
        s.onload = s.onreadystatechange = function () {
          //console.log( this.readyState ); //uncomment this line to see which ready states are called.
          if (!r && (!this.readyState || this.readyState == 'complete')) {
            r = true
            resolve()
          }
        }
        const t: any = document.getElementsByTagName('script')[0]
        t.parentNode.insertBefore(s, t)
      })
    }

    return loadedScripts[src]
  }
})()
