import type { Size as SizeType } from "../../types";

const APPAREL_SIZES: SizeType[] = ["Small", "Medium", "Large", "Extra Large"];

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
      className={`hover:cursor-pointer text-nowrap hover:bg-blood uppercase border p-4 w-fit ${addSelectedStyles()}`}
      onClick={() => setSelectedSize(size)}
    >
      {size}
    </div>
  );
}

export type ApparelSizesProps = {
  selectedSize: SizeType;
  setSelectedSize: React.Dispatch<React.SetStateAction<SizeType>>;
};

function ApparelSizes(props: ApparelSizesProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      {APPAREL_SIZES.map((size) => (
        <Size key={size} size={size} {...props} />
      ))}
    </div>
  );
}

export default ApparelSizes;
