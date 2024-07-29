import { useEffect, useRef, useState } from "react";

// Hook to provide state confirming whether user is scrolling up the page.
export function useScrollingUp() {
  const [scrollingUp, setScrollingUp] = useState(false);
  const prevYOffset = useRef(window.scrollY || 0);

  useEffect(() => {
    function handleScroll(e: Event) {
      if (prevYOffset.current > window.scrollY) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
      prevYOffset.current = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollingUp };
}
