type RouteParams = { [k: string]: string | number }
type RouteFunction<T extends RouteParams> = (params?: T) => string
export type RouteEntry = string | RouteFunction<never>

export interface Routes {
  [k: string]: RouteEntry
}

export type BuiltRoutes<T extends Routes> = {
  [k in keyof T]: T[k] extends string ? RouteFunction<never> : T[k]
}

/**
 * Builds the route object by prepending `root` to all the paths that do not
 * begin with /.
 */
function buildRoutes<T extends Routes>(
  base: string,
  routes: T
): Readonly<BuiltRoutes<T>> {
  const addRoot = (path: string) => {
    if (!path) {
      return `/${base}`
    }

    if (path[0] === '/') {
      return path
    }

    return path[0] === '?' ? `/${base}${path}` : `/${base}/${path}`
  }

  const transformEntry = (key: string, value: RouteEntry) => {
    if (typeof value === 'function') {
      const rf = (...args: Parameters<typeof value>) => addRoot(value(...args))

      return { [key]: rf }
    }

    return { [key]: () => addRoot(value) }
  }

  const ret = Object.keys(routes)
    .map((k) => [k, routes[k]] as [string, RouteEntry])
    .reduce(
      (acc, [key, value]) => ({ ...acc, ...transformEntry(key, value) }),
      {} as BuiltRoutes<T>
    )

  // Make sure the routes object is not accidentally modified
  return Object.freeze(ret)
}

/**
 * Takes a string with placeholders and returns a function compatible with
 * buildRoutes.
 *
 * @param url string - e.g. products/[slug]
 *
 * @returns
 */
export function routeFromUrl<T extends RouteParams = never>(
  url: string
): RouteFunction<T> {
  // We use a map because it preserves insertion order. That's important.
  const placeholders = new Map<keyof T, { start: number; end: number }>()
  // We need to double escape stuff because it's a string.
  const placeholderRegex = new RegExp('\\[([\\w]+)\\]', 'gi')
  let match: RegExpExecArray | null

  while ((match = placeholderRegex.exec(url)) !== null) {
    const [full, key] = match
    placeholders.set(key, {
      start: match.index!,
      end: match.index! + full.length,
    })
  }

  return (vals?: T) => {
    if (!vals) {
      return url
    }

    const parts: string[] = []
    let lastIx = 0

    placeholders.forEach((indices, key) => {
      parts.push(url.slice(lastIx, indices.start))
      parts.push(`${vals[key]}`)
      lastIx = indices.end
    })

    parts.push(url.slice(lastIx))

    return parts.join('')
  }
}

export default buildRoutes
