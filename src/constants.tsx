import type {
  ShippingOption,
  SortOption,
  Product,
  ProductCategory,
} from "./types";

export const MIN_ITEM_QTY = 1;
export const MAX_ITEM_QTY = 10;

export const SHIPPING_OPTIONS: ShippingOption[] = [
  { name: "Standard", cost: 5.99, days: 5 },
  { name: "Express", cost: 12.99, days: 2 },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { lowercase: "t-shirts", capitalized: "T-Shirts" },
  { lowercase: "longsleeves", capitalized: "Longsleeves" },
  { lowercase: "hoodies", capitalized: "Hoodies" },
  { lowercase: "vinyl", capitalized: "Vinyl" },
  { lowercase: "cds", capitalized: "CDs" },
  { lowercase: "patches", capitalized: "Patches" },
];

export const SORT_OPTIONS = ["A to Z", "Z to A", "New to Old", "Old to New"];

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

export const PRODUCT_TYPES = [
  "t-shirts",
  "longsleeves",
  "hoodies",
  "vinyl",
  "cds",
  "patches",
];
