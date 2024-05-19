import { useSearchParams } from "react-router-dom";
import { isSortOptionType } from "../utils/assertions";
import { SORT_OPTIONS } from "../constants";
import type { SortOption } from "../types";

// Hook to access and modify products sort state in url search params
export function useSortBy() {
  const [query, setQuery] = useSearchParams();
  const sortBy = query.get("sortBy") || "New to Old";

  // If user tries to type in sort option that does not exist,
  // set option to default;
  if (!SORT_OPTIONS.includes(sortBy)) {
    setSortBy("New to Old");
  }

  function setSortBy(sortBy: SortOption) {
    if (isSortOptionType(sortBy)) {
      setQuery((searchParams) => {
        searchParams.set("sortBy", sortBy);
        return searchParams;
      });
    }
  }

  return { sortBy: sortBy as SortOption, setSortBy };
}
