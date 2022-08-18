import { CartResponseItem } from "modules/cart/types";
import { EcommerceCartAction } from "utils/types";

export const getAddToCartEventData = (
  cartItem: CartResponseItem
): EcommerceCartAction => {
  return {
    id: cartItem.product.id,
    currency: cartItem.currency,
    price: cartItem.price / 100,
    name: cartItem.product.title,
    quantity: cartItem.quantity,
  }
}

export function computeItemsQuantity(items: CartResponseItem[]): number {
  return items.reduce((carry, item) => {
    return carry + item.quantity;
  }, 0);
}
