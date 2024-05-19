import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { allProducts } from "../db";
import { COMPARE_FNS } from "../constants";
import { isProductTypeArr } from "../utils/assertions";
import type { Product } from "../types";
import { useSortBy } from "./useSortBy";
import { useProductTypes } from "./useProductTypes";

// Hook to fetch a group of products using a collection name from the current
// url.
export function useProducts() {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  const { collection } = useParams();
  const { sortBy, setSortBy } = useSortBy();
  const { productTypes } = useProductTypes();
  const [query] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    let filtered = [...allProducts];

    // If user is in a product collection, filter by that product type
    if (collection) {
      filtered = allProducts.filter(
        (product) => product.category === collection
      );
      // If user has selected product type filters, apply them
    } else if (productTypes.length) {
      filtered = allProducts.filter((product) =>
        productTypes.includes(product.category)
      );
    }

    // Sort products by selected sort option
    const compareFn = COMPARE_FNS[sortBy];
    const sorted = [...filtered.sort(compareFn)];
    setProducts(sorted);

    setIsLoading(false);
  }, [collection, query]);

  // Reset sort option to default when user navigates to another collection
  useEffect(() => setSortBy("New to Old"), [collection]);

  isProductTypeArr(productTypes);

  return {
    collection,
    products,
    setProducts,
    isLoading,
  };
}
