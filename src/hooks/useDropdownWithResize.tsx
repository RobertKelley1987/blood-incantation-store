import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Hook to handle state of a dropdown menu that requires state
// updates when the screen exceeds a certain size.
export function useDropdownWithResize() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const path = useLocation().pathname;

  // Close dropdown if user is in small screen size and clicks a link
  useEffect(() => {
    const mdScreen = window.matchMedia("(min-width: 768px)");
    setDropdownOpen(mdScreen.matches);
  }, [path]);

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
  }, []);

  return { dropdownOpen, setDropdownOpen };
}
