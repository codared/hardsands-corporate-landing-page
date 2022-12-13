import { EcommerceImpressionPush } from "modules/analytics/types";
import { Product } from "modules/products/types";
import { SyntheticEvent } from "react";
import { TFunction } from "react-i18next";

export type CartDataDetails = {
  productDetails: Product;
  variant: string;
  quantity: number;
};

export interface ProductCardProps {
  name: string;
  description?: string;
  img?: string;
  t?: TFunction;
  productDetails: Product;
  price?: string;
  id: number;
  buttonText?: string;
  isLoading?: boolean;
  onButtonClick?: (e: SyntheticEvent, details: CartDataDetails) => void;
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
