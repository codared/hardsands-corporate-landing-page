import { EcommerceImpressionPush } from "modules/analytics/types";
import { Product } from "modules/products/types";
import { TFunction } from "react-i18next";

export interface ProductCardProps {
  name: string;
  description?: string;
  img?: string;
  t?: TFunction;
  productDetails: Product;
  price?: string;
  id: number;
  pushImpression?: EcommerceImpressionPush;
}

export interface HomeProductCardProps {
  name: string;
  slug?: string;
  description?: string;
  price: any;
  img?: string;
  t: TFunction;
}

export const CUSTOMIZED = "Customized";
