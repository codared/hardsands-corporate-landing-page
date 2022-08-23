import { TFunction } from "react-i18next";
import { isValidEmail } from "utils/validations";
import {
  BrandServicesAddress,
  OrderBaseOffer,
  Order,
  OrderItem,
  // OrderTrialOffer,
  ShippingLine,
  ShippingRate,
} from "./types";

export function isAddress(
  addr: BrandServicesAddress | [] | undefined
): addr is BrandServicesAddress {
  if (addr == null || (Array.isArray(addr) && addr.length === 0)) {
    return false;
  }
  return true;
}

// Any of these values can be N/A if customer updates address through apple pay without completing order
export function isIncompleteAddress(address: BrandServicesAddress) {
  return (
    address &&
    (address.first_name === "N/A" ||
      address.last_name === "N/A" ||
      address.street_1 === "N/A" ||
      address.phone_number === "N/A")
  );
}

// Clear these fields if they contain N/A
export function fixIncompleteAddress(
  address: BrandServicesAddress
): BrandServicesAddress {
  if (address.first_name === "N/A") {
    address.first_name = "";
  }
  if (address.last_name === "N/A") {
    address.last_name = "";
  }
  if (address.street_1 === "N/A") {
    address.street_1 = "";
  }
  if (address.phone_number === "N/A") {
    address.phone_number = "";
  }
  return address;
}

// export function isTrialOffer(offer: OrderBaseOffer): offer is OrderTrialOffer {
//   return (
//     offer.type === 'FREE_TRIAL' &&
//     (offer as OrderTrialOffer).initial_interval !== undefined
//   )
// }

export function getShippingMethodTitle(
  rate: ShippingRate | ShippingLine,
  shippingMethodTitle?: string
): string {
  if (shippingMethodTitle && rate.title.indexOf("Standard") === 0) {
    return shippingMethodTitle;
  }
  return rate.title;
}

export function isAddressPoBox(builtAddressString: string): boolean {
  const poBoxRegex = new RegExp(
    "\\b[P|p]*(OST|ost)*\\.*\\s*[O|o|0]*(ffice|FFICE)*\\.*\\s*[B|b][O|o|0][X|x]\\b"
  );
  return poBoxRegex.exec(builtAddressString) ? true : false;
}
export function shouldDisableExpressShipping(
  builtAddressString: string,
  rate: ShippingRate
): boolean {
  return isAddressPoBox(builtAddressString) && isExpressShipping(rate);
}

// export function isWarrantyAlreadyApplied(
//   orderItems: OrderItem[],
//   item: OrderItem
// ): boolean {
//   if (item.type === 'Warranty') return false
//   const found = orderItems.find(
//     (orderItem) =>
//       orderItem.type === 'Warranty' &&
//       orderItem.id === item.warranty_order_item_id
//   )
//   return !!found || false
// }

export function isExpressShipping(rate: ShippingRate): boolean {
  return rate.title.indexOf("Express") > -1;
}

export const isOneTimePurchaseOrder = (order: Order) => {
  return order.type === "otp";
};

export const getEmailValidator = (t: TFunction) => (value: string) => {
  if (!isValidEmail(value)) {
    return t(
      "formValidation:please-enter-a-valid-email",
      "Please enter a valid email address"
    );
  }

  return undefined;
};
