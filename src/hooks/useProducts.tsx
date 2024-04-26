import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../data";
import type { Product, SortOption } from "../types";

const SORT_FNS: { [Option in SortOption]: (a: Product, b: Product) => number } =
  {
    "A to Z": (a: Product, b: Product) => {
      const nameOne = a.productName.toLowerCase();
      const nameTwo = b.productName.toLowerCase();
      console.log(nameOne.localeCompare(nameTwo));
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
    let updated = [...products];

    // If user is in a product collection, filter by that product type
    if (productType) {
      updated = allProducts.filter(
        (product) => product.category === productType
      );
    }

    // Sort by selected sort option and re-render with updated items
    const sorted = updated.sort(SORT_FNS[sortOption]);
    setProducts(sorted);
    setIsLoading(false);

    return function reset() {
      setIsLoading(true);
      setProducts(allProducts);
      setSortOption("New to Old");
      window.scrollTo(0, 0);
    };
  }, [productType]);

  useEffect(() => {
    // Sort by selected sort option and re-render with updated items
    const sorted = [...products.sort(SORT_FNS[sortOption])];
    setProducts(sorted);
  }, [sortOption]);

  return { productType, products, isLoading, sortOption, setSortOption };
}
