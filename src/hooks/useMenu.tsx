import { useEffect, useState } from "react";

export function useMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return { menuOpen, setMenuOpen };
}
