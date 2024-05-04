import { forwardRef } from "react";

type TextInputProps = {
  id: string;
  label: string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ id, label }, ref) {
    return (
      <div className="flex flex-col">
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          type="text"
          id={id}
          className="border border-lightGrey focus:border focus:border-black focus:outline-none p-3 leading-[18.4px] flex"
        />
      </div>
    );
  }
);

export default TextInput;
