import { CartResponseItem } from "modules/cart/types";

export function computeItemsQuantity(items: CartResponseItem[]): number {
  return items.reduce((carry, item) => {
    return carry + item.quantity;
  }, 0);
}
