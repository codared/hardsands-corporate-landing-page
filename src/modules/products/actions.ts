import { ThunkActionCreator } from "redux/rootReducer";
import { productsApi } from "./services/products.service";
import { Product } from "./types";
import { getGeoIpCountryCode } from 'utils/geoIp';
import { selectAllProducts } from "./selectors";

export const fetchAllProductsCached: ThunkActionCreator<Promise<Product[]>> =
  (currency: string) => async (dispatch, getState) => {
    const products = selectAllProducts(currency)(getState());
    if (products) {
      console.log(`cache hit on all products ${currency}`);
      return products;
    }

    console.log(`cache miss on all products ${currency}`);

    const countryCode = await getGeoIpCountryCode();
    // const ignoreCountryDiscount = featureFlag("IGNORE_COUNTRY_DISCOUNT", true);

    const fetchedProducts = await productsApi.getAllProducts(
      currency,
      undefined,
      countryCode || undefined,
      undefined, // subscriptionDiscountKeys
    );

    dispatch({
      type: "PRODUCTS_LOAD_ALL" as const,
      payload: {
        products: fetchedProducts,
        currency,
      },
    });
    return fetchedProducts;
  };
