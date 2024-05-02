import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../db";
import type { Product, SortOption } from "../types";

const COMPARE_FNS: {
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
