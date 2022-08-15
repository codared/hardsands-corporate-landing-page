import { Product } from "modules/products/types";
import { TFunction } from "react-i18next";

export interface ProductCardProps {
  name: string;
  description?: string;
  img?: string;
  t?: TFunction;
  productDetails: Product;
  price?: string;
}

export interface HomeProductCardProps {
  name: string;
  description?: string;
  price: any;
  img?: string;
  t: TFunction;
}
