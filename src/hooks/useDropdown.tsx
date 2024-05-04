import { useEffect, useState } from "react";
import { assertIsNode } from "../utils/assertions";

// Hook to close dropdown menu when user clicks outside of it, and access
// dropdown's open/closed state.
// Requires ref to the outermost element of the dropdown as an argument.
export function useDropdown(dropdownRef: React.RefObject<HTMLElement>) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    function closeDropdown(e: MouseEvent) {
      // Confirm target is of type Node
      assertIsNode(e.target);

      // If clicked element is inside dropdown, do nothing,
      // otherwise, close menu
      if (dropdownRef.current?.contains(e.target)) return;
      setDropdownOpen(false);
    }

    // Add listener when component mounts and remove when it unmounts
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return { dropdownOpen, setDropdownOpen };
}
