import { useMessageRef } from "../../hooks/useMessageRef";
import type { ContactForm } from "../../types";

type MessageProps = {
  value: string;
  setForm: React.Dispatch<React.SetStateAction<ContactForm>>;
  error?: string;
};

function Message({ value, setForm, error }: MessageProps) {
  const { messageRef, updateHeight } = useMessageRef();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prev) => {
      return { ...prev, ["message"]: { value: e.target.value, error: "" } };
    });
  };

  const border = error ? "border-blood border-2" : "border-lightGrey";

  return (
    <div className="flex flex-col">
      <label htmlFor="message" className="mb-[4px]">
        Message
      </label>
      <textarea
        onChange={handleChange}
        ref={messageRef}
        value={value}
        id="message"
        onInput={updateHeight}
        className={`${border} border focus:border-black focus:border-[1px] focus:outline-none p-3 leading-[18.4px] flex`}
      />
      {error && <p className="mt-[4px] text-blood">{error}</p>}
    </div>
  );
}

export default Message;
