import type { ContactForm } from "../../types";

type TextInputProps = {
  id: string;
  value: string;
  setForm: React.Dispatch<React.SetStateAction<ContactForm>>;
  label: string;
  error: string;
};

function TextInput({ id, value, setForm, label, error }: TextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return { ...prev, [id]: { value: e.target.value, error: "" } };
    });
  };

  const border = error
    ? "border-blood outline-blood outline outline-1"
    : "border-lightGrey";

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-[4px]">
        {label}
      </label>
      <input
        onChange={handleChange}
        value={value}
        type="text"
        id={id}
        className={`${border} border focus:border-black focus:outline-none p-3 leading-[18.4px] flex`}
      />
      {error && <p className="mt-[4px] text-blood">{error}</p>}
    </div>
  );
}

export default TextInput;
