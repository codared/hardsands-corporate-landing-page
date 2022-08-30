import { ThunkActionCreator } from "redux/rootReducer";
import { productsApi } from "./services/products.service";
import { Product } from "./types";
import { getGeoIpCountryCode } from "utils/geoIp";
import { selectAllProducts, selectSingleProduct } from "./selectors";
import { mergeProductImages, mergeProductsImages } from "./functions";

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

    let fetchedProducts = await productsApi.getAllProducts(
      currency,
      undefined,
      countryCode || undefined,
      undefined // subscriptionDiscountKeys
    );

    fetchedProducts = mergeProductsImages(fetchedProducts);

    dispatch({
      type: "PRODUCTS_LOAD_ALL" as const,
      payload: {
        products: fetchedProducts,
        currency,
      },
    });
    return fetchedProducts;
  };

export const fetchProductCached: ThunkActionCreator<Promise<Product | null>> =
  (slugOrId: string | number, currency: string) =>
  async (dispatch, getState) => {
    let product: Product | null | undefined;
    if (typeof slugOrId === "string") {
      product = selectSingleProduct({ slug: slugOrId, currency })(getState());
    } else {
      product = selectSingleProduct({ id: slugOrId, currency })(getState());
    }

    if (product != null) {
      console.log(`cache hit on single products ${slugOrId} ${currency}`);
      return product;
    }

    console.log(`cache miss on single products ${slugOrId} ${currency}`);

    const countryCode = await getGeoIpCountryCode();
    // const ignoreCountryDiscount = featureFlag("IGNORE_COUNTRY_DISCOUNT", true);

    let fetchedProduct = await productsApi.getSingleProduct(
      slugOrId,
      currency,
      countryCode || undefined,
      undefined // subscriptionDiscountKeys
    );

    fetchedProduct = mergeProductImages(fetchedProduct);

    dispatch({
      type: "PRODUCTS_LOAD_SINGLE" as const,
      payload: {
        product: fetchedProduct,
        currency
      }
    });
    return fetchedProduct;
  };
