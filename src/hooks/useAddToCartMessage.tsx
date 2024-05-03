import { useEffect, useRef, useState } from "react";

// Hook to provide state for a confirmation message inside button,
// that adds items to cart, ex: "Item Added!"
export function useAddToCartMessage() {
  const [displayMessage, setDisplayMessage] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  // As soon as confirmation message is displayed inside button,
  // start a timer to hide the message after two seconds.
  useEffect(() => {
    if (displayMessage) {
      timeoutId.current = setTimeout(() => setDisplayMessage(false), 2000);
    }

    // Clear timeout when component unmounts
    return () => clearTimeout(timeoutId.current);
  }, [displayMessage]);

  return { displayMessage, setDisplayMessage };
}
