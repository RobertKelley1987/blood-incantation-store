import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Hook to access current page number.
export function usePageNum() {
  const [query, setQuery] = useSearchParams({ page: "1" });

  // Parse page number
  const pageNumQuery = query.get("page");
  const pageNum = pageNumQuery ? parseInt(pageNumQuery) : 1;

  // Method to update page number without deleting existing search params
  function setPageNum(page: number) {
    setQuery((searchParams) => {
      searchParams.set("page", page.toString());
      return searchParams;
    });
  }

  // Scroll to top of page if page num changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNum]);

  return { pageNum, setPageNum };
}
