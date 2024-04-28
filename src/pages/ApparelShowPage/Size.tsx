import type { Size as SizeType } from "../../types";

type SizeProps = {
  size: SizeType;
  selectedSize: SizeType;
  setSelectedSize: React.Dispatch<React.SetStateAction<SizeType>>;
};

function Size({ size, selectedSize, setSelectedSize }: SizeProps) {
  const addSelectedStyles = () =>
    size === selectedSize ? "bg-blood italic" : "";

  return (
    <div
      className={`hover:cursor-pointer text-nowrap hover:bg-blood uppercase border border-black p-4 w-fit ${addSelectedStyles()}`}
      onClick={() => setSelectedSize(size)}
    >
      {size}
    </div>
  );
}

export default Size;
