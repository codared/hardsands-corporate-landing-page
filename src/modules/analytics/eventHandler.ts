interface Listener<T> {
  event: keyof T
  handler: (...args: any[]) => void
}

type EventsDefinition<T> = {
  [key in keyof T]: any[]
}

export class EventHandler<T extends EventsDefinition<T>> {
  protected listeners: Map<keyof T, Listener<T>[]>

  public constructor() {
    this.listeners = new Map<keyof T, Listener<T>[]>()
  }

  /**
   * Listens for any time an event happens.
   *
   * @returns function - A function to remove the listener.
   */
  public on<E extends keyof T>(
    event: E,
    handler: (...args: T[E]) => void
  ): () => void {
    const listener = { event, handler }
    const listeners = this.listeners.get(event) || []
    listeners.push(listener)
    this.listeners.set(event, listeners)

    return () => {
      return this.removeListener(listener)
    }
  }

  /**
   * Listens for only the next time an event happens.
   *
   * @returns function - A function to remove the listener.
   */
  public once<E extends keyof T>(
    event: E,
    handler: (...args: T[E]) => void
  ): () => void {
    const listeners = this.listeners.get(event) || []
    const listener = {
      event,
      handler: (...args: T[E]) => {
        this.removeListener(listener)
        handler(...args)
      },
    }

    listeners.push(listener)
    this.listeners.set(event, listeners)

    return () => {
      return this.removeListener(listener)
    }
  }

  /**
   * Emits an event.
   */
  public emit<E extends keyof T>(event: E, args: T[E]) {
    const listeners = this.listeners.get(event) || []
    listeners.forEach(({ handler }) => handler(...args))
  }

  protected removeListener(listener: Listener<T>) {
    let listeners = this.listeners.get(listener.event)

    if (!listeners) {
      return
    }

    listeners = listeners.filter((cur) => cur !== listener)
    this.listeners.set(listener.event, listeners)
  }
}
