import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types";

// Hook to access a specific product using the produc's id from the
// current url.
export function useProduct<T extends Product>(products: T[]) {
  const [product, setProduct] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const product = products.find((product) => product.id === id) || null;
    setProduct(product);
    setIsLoading(false);

    return function reset() {
      setProduct(null);
    };
  }, [id]);

  return { product, isLoading };
}
