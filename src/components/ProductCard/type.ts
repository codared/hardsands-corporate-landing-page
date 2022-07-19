import { TFunction } from "react-i18next";

export interface ProductCardProps {
  name: string;
  description?: string;
  price: any;
  img?: string;
  t?: TFunction;
}
