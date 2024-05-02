import type { ShippingOption } from "./types";

export const MIN_ITEM_QTY = 1;
export const MAX_ITEM_QTY = 10;

export const SHIPPING_OPTIONS: ShippingOption[] = [
  { name: "Standard", cost: 5.99, days: 5 },
  { name: "Express", cost: 12.99, days: 2 },
];
