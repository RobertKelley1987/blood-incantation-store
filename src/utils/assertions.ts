import { PRODUCT_TYPES, SORT_OPTIONS } from "../constants";
import type { SortOption } from "../types";

// Helper to confirm target clicked is of type Node
export function assertIsNode(
  target: EventTarget | null
): asserts target is Node {
  if (!target || !("nodeType" in target)) {
    throw new Error("Element clicked is not a react node");
  }
}

// Helper to confirm whether a string is of SortOption type
export function isSortOptionType(sortOption: string): sortOption is SortOption {
  const isSortOption = SORT_OPTIONS.includes(sortOption);

  if (!isSortOption) {
    throw new Error("Value must be of type SortOption.");
  } else {
    return true;
  }
}

// Helper to confirm whether string array is composed of ProductType values.
export function isProductTypeArr(productTypes: string[]) {
  let assertionFailed = false;
  let i = 0;

  while (!assertionFailed && i < productTypes.length) {
    if (!PRODUCT_TYPES.includes(productTypes[i])) {
      assertionFailed = true;
    }
    i++;
  }

  if (assertionFailed) {
    throw new Error("Value must be an array of type ProductType.");
  } else {
    return true;
  }
}
