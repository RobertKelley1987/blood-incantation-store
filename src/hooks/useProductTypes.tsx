import { useSearchParams } from "react-router-dom";
import { PRODUCT_TYPES } from "../constants";
import type { ProductType } from "../types";

// Hook to access and modify product types filter in url search params
export function useProductTypes() {
  const [query, setQuery] = useSearchParams();
  const productTypes = query.getAll("productType");

  // If user tries to type in productType that does not exist,
  // set option to default;
  for (const productType of productTypes) {
    if (!PRODUCT_TYPES.includes(productType)) {
      setProductTypes(null);
    }
  }

  function setProductTypes(productTypes: ProductType[] | null) {
    setQuery((searchParams) => {
      // Clear previous product types
      searchParams.delete("productType");

      // To avoid navigating to a page that does not exist,
      // reset page when filter is updated
      searchParams.delete("page");

      // If null, return params with all types removed
      if (productTypes === null) {
        return searchParams;
      }

      // Otherwise add each value from array
      productTypes.forEach((productType) =>
        searchParams.append("productType", productType)
      );
      return searchParams;
    });
  }

  return { productTypes: productTypes as ProductType[], setProductTypes };
}
