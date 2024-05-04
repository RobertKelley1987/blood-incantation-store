import { forwardRef, useEffect, useRef } from "react";

// All credit owed to this stack overflow post:
// https://stackoverflow.com/questions/62238716/using-ref-current-in-react-forwardref
type MessageProps = React.HTMLProps<HTMLTextAreaElement>;

const Message = forwardRef<HTMLTextAreaElement, MessageProps>(function Message(
  props,
  ref
) {
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const node = messageRef.current;

  // Expand and contract textarea as user types.
  const updateHeight = () => {
    if (node) {
      node.style.height = "inherit";
      node.style.height = node.scrollHeight + "px";
    }
  };

  // Update height of textarea when component mounts
  useEffect(() => {
    updateHeight();
  }, [ref]);

  return (
    <div className="flex flex-col">
      <label htmlFor="message">Message</label>
      <textarea
        ref={(node) => {
          messageRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        id="message"
        onInput={updateHeight}
        className="border border-lightGrey focus:border focus:border-black focus:outline-none p-3 leading-[18.4px] flex"
      />
    </div>
  );
});

export default Message;
