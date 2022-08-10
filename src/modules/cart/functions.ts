import { CartResponseItem } from "modules/CART/types";

export function computeItemsQuantity(items: CartResponseItem[]): number {
  return items.reduce((carry, item) => {
    return carry + item.quantity;
  }, 0);
}
