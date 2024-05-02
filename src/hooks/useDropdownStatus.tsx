import { useEffect, useState } from "react";

export function useDropdownStatus() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const mdScreen = window.matchMedia("(min-width: 768px)");

    function toggleDropdown(e: MediaQueryListEvent) {
      setDropdownOpen(e.matches);
    }
    mdScreen.addEventListener("change", toggleDropdown);

    return () => mdScreen.removeEventListener("change", toggleDropdown);
  });

  return { dropdownOpen, setDropdownOpen };
}
