import type { ShippingOption, SortOption, Product } from "./types";

export const MIN_ITEM_QTY = 1;
export const MAX_ITEM_QTY = 10;

export const SHIPPING_OPTIONS: ShippingOption[] = [
  { name: "Standard", cost: 5.99, days: 5 },
  { name: "Express", cost: 12.99, days: 2 },
];

export const COMPARE_FNS: {
  [Option in SortOption]: (a: Product, b: Product) => number;
} = {
  "A to Z": (a: Product, b: Product) => {
    const nameOne = a.productName.toLowerCase();
    const nameTwo = b.productName.toLowerCase();
    return nameOne.localeCompare(nameTwo);
  },
  "Z to A": (a: Product, b: Product) => {
    const nameOne = a.productName.toLowerCase();
    const nameTwo = b.productName.toLowerCase();
    return nameTwo.localeCompare(nameOne);
  },
  "New to Old": (a: Product, b: Product) => {
    const dateOne = new Date(a.dateAdded).getTime();
    const dateTwo = new Date(b.dateAdded).getTime();
    return dateTwo - dateOne;
  },
  "Old to New": (a: Product, b: Product) => {
    const dateOne = new Date(a.dateAdded).getTime();
    const dateTwo = new Date(b.dateAdded).getTime();
    return dateOne - dateTwo;
  },
};
