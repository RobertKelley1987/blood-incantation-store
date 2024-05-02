import { useEffect, useState } from "react";

export function useDropdownStatus() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Define media query for medium screen size
    const mdScreen = window.matchMedia("(min-width: 768px)");

    // Function to toggle dropdown if query matches
    function toggleDropdown(e: MediaQueryListEvent) {
      setDropdownOpen(e.matches);
    }

    // Add listener to media query
    mdScreen.addEventListener("change", toggleDropdown);

    // Set dropdown based on screen size on initial render
    if (mdScreen.matches) setDropdownOpen(true);

    // Remove listener when component unmounts
    return () => mdScreen.removeEventListener("change", toggleDropdown);
  });

  return { dropdownOpen, setDropdownOpen };
}
