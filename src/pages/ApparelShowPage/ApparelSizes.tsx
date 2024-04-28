import Size from "./Size";
import type { Size as SizeType } from "../../types";

const APPAREL_SIZES: SizeType[] = ["Small", "Medium", "Large", "Extra Large"];

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
