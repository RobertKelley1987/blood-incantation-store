import { useEffect, useRef } from "react";

// Hook to handle logic that makes text area input in
// contact form resize as user types.
export function useMessageRef() {
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  // Expand and contract textarea as user types.
  const updateHeight = () => {
    const ref = messageRef.current;

    if (ref) {
      ref.style.height = "inherit";
      ref.style.height = ref.scrollHeight + "px";
    }
  };

  // Set height of textarea when component mounts.
  // Experience was a little janky when I left this out.
  useEffect(() => {
    updateHeight();
  }, [messageRef]);

  return { messageRef, updateHeight };
}
