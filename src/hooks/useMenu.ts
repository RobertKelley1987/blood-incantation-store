import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Hook to handle state of menu accessed via hamburger link.
export function useMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = useLocation().pathname;

  // Adds listener to close menu if user resizes window past medium size.
  useEffect(() => {
    function closeMenuOnResize(e: MediaQueryListEvent) {
      if (e.matches) setMenuOpen(false);
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener("change", closeMenuOnResize);

    return function removeListener() {
      mediaQuery.removeEventListener("change", closeMenuOnResize);
    };
  }, []);

  // Close menu if user clicks a link
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  return { menuOpen, setMenuOpen };
}
