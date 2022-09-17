import { UserAttribute, TraitData } from '../userState/types'

type ItemData = {
  title: string
  variant: string
}

type OrderItemsState = {
  initial: ItemData[]
  recent: ItemData[]
}

export const OrderItemsAttribute: UserAttribute<OrderItemsState> = {
  key: 'orderItems',

  computeOn: ['orderConfirmed'],

  computeFn: (existing, data) => {
    const order = data as Record<string, any>

    // We are limiting to the first 5 items inserted by the customer in order to limit the cookie length
    const items = order.order_items.data.slice(0,5).map(
      //@ts-ignore
      ({ title, variant_title: variant }) => ({ title, variant }) 
    )

    return {
      initial: existing?.initial || items,
      recent: items,
      totalItems: order.order_items.data.length
    }
  },

  getTraits: (state: OrderItemsState) => {
    return Object.entries(state).reduce<TraitData[]>(
      (acc, [k, items]) => {
        const key = `${k}_purchase_order_items`
        const keySize = `${key}_with_size`

        if (!Array.isArray(items)) {
          return acc
        }

        return [
          ...acc,
          { key, value: items?.map((i) => i.title).join(', ') || '' },
          {
            key: keySize,
            value: items?.map((i) => `${i.title} | ${i.variant}`).join(', ') || '',
          },
        ]
      },
      []
    )
  },
}
