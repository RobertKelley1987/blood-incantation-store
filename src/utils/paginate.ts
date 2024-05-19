import type { Product } from "../types";

const ITEMS_PER_PG = 12;

// Helper to paginate products.
// List of products required as arg.
// Returns an array of product arrays.
export function paginate(products: Product[]) {
  const pages: Product[][] = [];
  let page: Product[] = [];
  let i = 0;

  while (i < products.length) {
    if (page.length === ITEMS_PER_PG) {
      console.log(page);
      pages.push(page);
      page = [];
    }

    page.push(products[i]);
    i++;
  }

  // Add final page to arr
  pages.push(page);

  return pages;
}
