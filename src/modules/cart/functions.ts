import { EcommerceCartAction } from "modules/analytics/types";
import { CartResponseItem } from "modules/cart/types";

export const getAddToCartEventData = (
  cartItem: CartResponseItem,
  cartId: string
): EcommerceCartAction => {
  return {
    cartId,
    id: cartItem.product.id,
    currency: cartItem.currency,
    price: cartItem.price / 100,
    name: cartItem.product.title,
    quantity: cartItem.quantity,
    variant: cartItem.productVariantKey,
    category: cartItem.productVariantKey?.toLowerCase() === "plain" || cartItem.productVariantKey?.toLowerCase() === "customized" ? "CARD" : "EPOXY"
  }
}

export function computeItemsQuantity(items: CartResponseItem[]): number {
  return items.reduce((carry, item) => {
    return carry + item.quantity;
  }, 0);
}
