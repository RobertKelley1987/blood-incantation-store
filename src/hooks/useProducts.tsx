import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../data";
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
    if (products) {
      setIsLoading(false);
    }
  }, [products]);

  useEffect(() => {
    setIsLoading(true);
    const compareFn = COMPARE_FNS[sortOption];
    const sorted = [...products.sort(compareFn)];
    setProducts(sorted);
  }, [sortOption]);

  useEffect(() => {
    setIsLoading(true);
    let filtered = [...allProducts];

    // If user is in a product collection, filter by that product type
    if (productType) {
      filtered = allProducts.filter(
        (product) => product.category === productType
      );
    }

    setProducts(filtered);
    setSortOption("New to Old");
    window.scrollTo(0, 0);
  }, [productType]);

  return { productType, products, isLoading, sortOption, setSortOption };
}
