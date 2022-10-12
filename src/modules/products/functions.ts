import { CARD_IMAGES, PRODUCTS } from "./constants";
import { Product } from "./types";

export const mergeProductsImages = (products: Product[]) => {
  return products.map((prod) => {
    return mergeProductImages(prod);
  });
};

export const mergeProductImages = (product: Product) => {
  const isEpoxy = product.id === 2;
  // add description and how it works texts
  product.description = PRODUCTS[product.slug]["description"];
  product["how-it-works"] = PRODUCTS[product.slug]["how-it-works"];

  if (isEpoxy) {
    product.variants.Black = {
      ...product.variants.Black,
      images: PRODUCTS[product.slug]["Black"],
    };
    product.variants.Sandtone = {
      ...product.variants.Sandtone,
      images: PRODUCTS[product.slug]["Sandtone"],
    };

    return product;
  }

  product.variants.Customized = {
    ...product.variants.Customized,
    images: PRODUCTS[product.slug]["Customized"],
  };
  product.variants.Plain = {
    ...product.variants.Plain,
    images: PRODUCTS[product.slug]["Plain"],
  };

  return product;
};

export const getProductImageFromSlug = (slug: string, variantKey: string) => {
  return PRODUCTS[slug][variantKey][0];
};

export const getCardImageFromSlug = (slug: string) => {
  return CARD_IMAGES[slug][0];
};
