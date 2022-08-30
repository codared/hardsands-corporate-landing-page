import { PRODUCT_IMAGES } from "./constants";
import { Product } from "./types";

export const mergeProductsImages = (products: Product[]) => {
  return products.map((prod) => {
    const isEpoxy = prod.id === 2;
    if (isEpoxy) {
      prod.variants.Black = {
        ...prod.variants.Black,
        images: PRODUCT_IMAGES[prod.slug]["Black"],
      };
      prod.variants.Sandtone = {
        ...prod.variants.Sandtone,
        images: PRODUCT_IMAGES[prod.slug]["Sandtone"],
      };

      return prod;
    }
    prod.variants.Customized = {
      ...prod.variants.Customized,
      images: PRODUCT_IMAGES[prod.slug]["Customized"],
    };
    prod.variants.Plain = {
      ...prod.variants.Plain,
      images: PRODUCT_IMAGES[prod.slug]["Plain"],
    };

    return prod;
  });
};

export const mergeProductImages = (product: Product) => {
  const isEpoxy = product.id === 2;
  if (isEpoxy) {
    product.variants.Black = {
      ...product.variants.Black,
      images: PRODUCT_IMAGES[product.slug]["Black"],
    };
    product.variants.Sandtone = {
      ...product.variants.Sandtone,
      images: PRODUCT_IMAGES[product.slug]["Sandtone"],
    };

    return product;
  }

  product.variants.Customized = {
    ...product.variants.Customized,
    images: PRODUCT_IMAGES[product.slug]["Customized"],
  };
  product.variants.Plain = {
    ...product.variants.Plain,
    images: PRODUCT_IMAGES[product.slug]["Plain"],
  };

  return product;
};

export const getProductImageFromSlug = (slug: string, variantKey?: string) => {
  return PRODUCT_IMAGES[slug][variantKey][0];
};
