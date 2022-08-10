import { useCurrency } from "modules/CART/hooks";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTypedDispatch } from "redux/store";
import { Product, ProductDetails } from "utils/types";
import { fetchAllProductsCached } from "./actions";

type UseProductData = {
  product: Product | null;
  productDetails: ProductDetails | null;
};


/**
 * This hook will load all products for the selected currency
 * after a certain amount of time
 */
 export function usePreloadProducts(timeout = 0) {
  const dispatch = useTypedDispatch()
  const currency = useCurrency()
  useEffect(() => {
    setTimeout(() => {
      console.log('PRELOADING PRODUCTS')
      dispatch(fetchAllProductsCached(currency) as any)
    }, timeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}


/**
 * This hook is a little complicated, it's meant to:
 * 1. Load productDetails synchronously for an initialProduct that's passed from the server
 * 2. re-run anytime the slug or currency changes and refetch product / productDetails
 */
export const useProduct = (
  initialProduct: Product | undefined,
  slug: string
): UseProductData => {
  const { t } = useTranslation();
  const currency = "USD"; // useCurrency()
  const dispatch = useTypedDispatch();
  // sync get product details for initial product
  // useRef() prevents this from being run after first render
  const initialProductDetails = useRef<ProductDetails | null>(null);
  if (!initialProductDetails.current && initialProduct) {
    // initialProductDetails.current = getProductDetails(t, initialProduct.id);
  }

  const [state, setState] = useState<UseProductData>({
    product: initialProduct ?? null,
    productDetails: initialProductDetails.current,
  });

  useEffect(() => {
    // dispatch(fetchProductCached(slug, currency)).then((product) => {
    //   const productDetails = product ? getProductDetails(t, product.id) : null;
    //   setState({
    //     product,
    //     productDetails,
    //   });
    // });
  }, [currency, slug]);

  return state;
};
