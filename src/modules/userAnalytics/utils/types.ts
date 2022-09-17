export function isPromise<T extends any>(v: any | Promise<T>): v is Promise<T> {
  return typeof (v as Promise<T>).then === 'function'
}
