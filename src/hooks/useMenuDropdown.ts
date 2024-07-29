import { useEffect, useState } from "react";
import { assertIsNode } from "../utils/assertions";
import { useLocation } from "react-router-dom";

// Hook to close dropdown menu when user clicks outside of it and handle
// its open/closed state.
// Requires ref to the outermost element of the dropdown as an argument.
export function useMenuDropdown(dropdownRef: React.RefObject<HTMLElement>) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    function clickOutsideToClose(e: MouseEvent) {
      // Confirm target is of type Node
      assertIsNode(e.target);

      // If clicked element is inside dropdown, do nothing,
      // otherwise, close dropdown
      if (dropdownRef.current?.contains(e.target)) return;
      setDropdownOpen(false);
    }

    // Add listener when component mounts and remove when it unmounts
    document.body.addEventListener("click", clickOutsideToClose);
    return () =>
      document.body.removeEventListener("click", clickOutsideToClose);
  }, [dropdownRef]);

  useEffect(() => {
    setDropdownOpen(false);
  }, [path]);

  return { dropdownOpen, setDropdownOpen };
}
