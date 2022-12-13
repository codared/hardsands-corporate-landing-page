import { Product } from "modules/products/types";
import { useContext, useState } from "react";
import { CheckoutContext } from "redux/context";
import { addItemToCart } from "./actions";

import { computeItemsQuantity } from "./functions";

export function useCartItemCount() {
  const { state } = useContext(CheckoutContext);
  const items = state.cart.cart?.items;
  if (!items) {
    return 0;
  }

  return computeItemsQuantity(items);
}

export function useCurrency() {
  const { state } = useContext(CheckoutContext);
  const curr = state.cart.selectedCurrency;
  if (!curr) {
    throw new Error("NO CURRENCY");
  }
  return curr;
}

export const useAddtoCart = ({
  productDetails,
  activeVariant,
  quantity,
}: {
  productDetails: Product;
  activeVariant: string | number;
  quantity: number;
}) => {
  const { dispatch } = useContext(CheckoutContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddtoCart = async () => {
    setIsLoading(true);

    const customizedCartItem = {
      productId: productDetails?.id,
      productVariant: activeVariant,
      quantity,
    };

    try {
      await dispatch(addItemToCart(customizedCartItem));
      setIsLoading(false);
      setIsCartOpen(true);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return { isCartOpen, setIsCartOpen, isLoading, handleAddtoCart };
};
