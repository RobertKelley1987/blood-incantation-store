import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { allProducts } from "../db";
import { COMPARE_FNS } from "../constants";
import { isProductTypeArr, isSortOptionType } from "../utils/assertions";
import type { Product, ProductType, SortOption } from "../types";

// Hook to fetch a group of products using a collection name from the current
// url.
export function useProducts() {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  const { collection } = useParams();
  const [query, setQuery] = useSearchParams({
    productType: [],
    sortBy: "New to Old",
  });
  const sortBy = query.get("sortBy") || "New to Old";
  const productTypes = query.getAll("productType");

  function setSortBy(sortBy: SortOption) {
    setQuery({
      sortBy: sortBy,
      productType: productTypes,
    });
  }

  function setProductTypes(productTypes: ProductType[]) {
    setQuery({
      sortBy: sortBy,
      productType: productTypes,
    });
  }

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
      filtered = allProducts.filter((product) => {
        if (productTypes.includes(product.category)) {
          return product;
        }
      });
    }

    // Sort products by selected sort option
    if (isSortOptionType(sortBy)) {
      const compareFn = COMPARE_FNS[sortBy];
      const sorted = [...filtered.sort(compareFn)];
      setProducts(sorted);
    }

    window.scrollTo(0, 0);
    setIsLoading(false);
  }, [collection, query]);

  // Reset sort option to default when user navigates to another collection
  useEffect(() => {
    setQuery((prev) => {
      return { ...prev, sortBy: "New to Old" };
    });
  }, [collection]);

  isProductTypeArr(productTypes);

  return {
    collection,
    products,
    setProducts,
    isLoading,
    sortBy,
    setSortBy,
    productTypes: productTypes as ProductType[],
    setProductTypes,
  };
}
