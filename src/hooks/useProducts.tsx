import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { allProducts } from "../data";
import type { Product } from "../types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      const filtered = allProducts.filter(
        (product) => product.category === category
      );
      setProducts(filtered);
    }
    setIsLoading(false);

    return function reset() {
      setIsLoading(true);
      setProducts(allProducts);
      window.scrollTo(0, 0);
    };
  }, [category]);

  return { products, isLoading };
}
