import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../db";
import { COMPARE_FNS } from "../constants";
import type { Product, SortOption } from "../types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState<SortOption>("New to Old");
  const { productType } = useParams();

  useEffect(() => {
    let filtered = [...allProducts];

    // If user is in a product collection, filter by that product type
    if (productType) {
      filtered = allProducts.filter(
        (product) => product.category === productType
      );
    }

    // Sort products by selected sort option
    const compareFn = COMPARE_FNS[sortOption];
    const sorted = [...filtered.sort(compareFn)];
    setProducts(sorted);

    window.scrollTo(0, 0);
    setIsLoading(false);
  }, [productType, sortOption]);

  // Reset sort option to default when user navigates to another collection
  useEffect(() => {
    setSortOption("New to Old");
  }, [productType]);

  return { productType, products, isLoading, sortOption, setSortOption };
}
