import { BrandServicesAddress } from '../modules/checkout/types'

interface LifecycleInstance {
  handleShippingAddressUpdated: (address: BrandServicesAddress) => void
}

export let lifecycle: LifecycleInstance | null = null;

export function setLifecycleInstance(lifecycleInstance: LifecycleInstance) {
  if (lifecycle === null) {
    lifecycle = lifecycleInstance;
  }
}
