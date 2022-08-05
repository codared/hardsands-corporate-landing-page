import { ReactElement } from "react";

export type ShippingMethodType = {
  title: string;
  subTitle: string;
  content: ReactElement;
  value: string | number;
  isChecked?: boolean;
};
