type LoadedScriptsT = { [src: string]: Promise<void> }

export const loadScript = (() => {
  return async (
    src: string,
    toLoad: { [key: string]: any } = {},
    type = 'text/javascript'
  ): Promise<void> => {
    const win = window as Window & {
      loadedScripts?: LoadedScriptsT
    }
    // Index to only load the same script once.
    win.loadedScripts = win.loadedScripts || {}

    Object.keys(toLoad).forEach((key) => {
      window[key] = toLoad[key]
    })

    if (!win.loadedScripts[src]) {
      win.loadedScripts[src] = new Promise((resolve, reject) => {
        let r = false
        const s: any = document.createElement('script')
        s.type = type
        s.src = src
        s.onload = s.onreadystatechange = function () {
          if (!r && (!this.readyState || this.readyState == 'complete')) {
            r = true
            resolve()
          }
        }
        s.onerror = function (e: any) {
          reject(e)
        }
        const t: any = document.getElementsByTagName('script')[0]
        t.parentNode.insertBefore(s, t)
      })
    }

    return win.loadedScripts[src]
  }
})()
