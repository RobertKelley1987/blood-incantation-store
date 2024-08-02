import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { allProducts } from "../db";
import { useSortBy } from "./useSortBy";
import { useProductTypes } from "./useProductTypes";
import { COMPARE_FNS } from "../constants";
import type { Product } from "../types";

// Hook to fetch a group of products using a collection name from the current
// url.
export function useProducts() {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  const { collection } = useParams();
  const { sortBy } = useSortBy();
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
    const sortOption = sortBy ? sortBy : "New to Old";
    const compareFn = COMPARE_FNS[sortOption];
    const sorted = [...filtered.sort(compareFn)];
    setProducts(sorted);

    setIsLoading(false);
  }, [collection, query]);

  return {
    collection,
    products,
    setProducts,
    isLoading,
  };
}
