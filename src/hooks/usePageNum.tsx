import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

// Hook to access current page number.
const usePageNum = () => {
  // Get query params from url
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);

  // Parse and page number
  const pageNumQuery = query.get("page") || "1";
  const pageNum = parseInt(pageNumQuery);

  // Scroll to top of page if page num changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNum]);

  return { pageNum };
};

export default usePageNum;
