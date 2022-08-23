import * as Sentry from "@sentry/browser";

// import { optimizelyPush } from '../optimizely'
import { LIFECYCLE_EVENT, EventParameters } from "./types";

class Lifecycle {
  private hasFirstLoad: boolean = false;
  private isFirstPageView: boolean = true;
  private handlers: {
    [key in LIFECYCLE_EVENT]?: (...args: any[]) => void;
  } = {};

  constructor() {
    if (!process.browser) {
      return;
    }

    // optimizelyPush({
    //   type: 'addListener',
    //   filter: {
    //     type: 'lifecycle',
    //     name: 'pageActivated',
    //   },
    //   // Optimizely does not update the experiment state
    //   // (`optimizely.get('state')`) with the latest manually activated
    //   // experiment immediately after doing so.
    //   handler: () =>
    //     setTimeout(
    //       () => this.dispatchEvent('optimizelyPageActivated', undefined),
    //       250
    //     ),
    // })
  }

  public registerListeners(listeners: {
    [key in LIFECYCLE_EVENT]?: (args: EventParameters[key]) => void;
  }) {
    // @ts-ignore
    Object.keys(listeners).forEach((event: LIFECYCLE_EVENT) => {
      this.handlers[event] = listeners[event];
    });
  }

  /**
   * In order to centralize event handling, only a single listener can be
   * registered per event.
   */
  public registerListener<T extends LIFECYCLE_EVENT>(
    event: T,
    cb: (atts: EventParameters[T]) => void
  ) {
    if (this.handlers[event]) {
      throw new Error(`registering callback for ${event} more than once`);
    }

    this.handlers[event] = cb;
  }

  private dispatchEvent<T extends LIFECYCLE_EVENT>(
    event: T,
    atts: EventParameters[T]
  ) {
    const cb = this.handlers[event];

    try {
      cb && cb(atts);
    } catch (e) {
      console.error(`An error ocurred handling lifecycle (event=${event})`);
      console.error(e);

      Sentry.captureException(e);
    }
  }

  handleFirstLoad() {
    if (this.hasFirstLoad) {
      return;
    }

    this.dispatchEvent("firstLoad", this.isFirstPageView);
    this.hasFirstLoad = true;
  }

  handleShippingAddressUpdated(
    atts: EventParameters["shippingAddressUpdated"]
  ) {
    this.dispatchEvent("shippingAddressUpdated", atts);
  }

  handleOrderConfirmed(atts: EventParameters["orderConfirmed"]) {
    this.dispatchEvent("orderConfirmed", atts);
  }

  handlePageview(atts: EventParameters["pageView"]) {
    this.dispatchEvent("pageView", { ...atts, isFirst: this.isFirstPageView });
    this.isFirstPageView = false;
  }
}

const lifecycle = new Lifecycle();

export default lifecycle;
