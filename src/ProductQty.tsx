import { MIN_ITEM_QTY, MAX_ITEM_QTY } from "./constants";
import PlusSVG from "./PlusSVG";
import MinusSVG from "./MinusSVG";

type ProductQtyProps = {
  qty: number;
  decrement: () => void;
  increment: () => void;
  style: "big" | "small";
};

const BTN_STYLES = {
  big: "min-w-12 px-6 py-3 border hover:bg-blood",
  small: "min-w-12 px-3 py-3 border hover:bg-blood text-sm",
};

const QTY_STYLES = {
  big: "min-w-24 py-3 inline-block text-center border-y",
  small: "min-w-12 py-3 inline-block text-center border-y",
};

function ProductQty({ qty, decrement, increment, style }: ProductQtyProps) {
  return (
    <div className="flex items-center w-fit">
      <button
        className={BTN_STYLES[style]}
        onClick={() => qty > MIN_ITEM_QTY && decrement()}
      >
        <MinusSVG />
      </button>
      <span className={QTY_STYLES[style]}>{qty}</span>
      <button
        className={BTN_STYLES[style]}
        onClick={() => qty < MAX_ITEM_QTY && increment()}
      >
        <PlusSVG />
      </button>
    </div>
  );
}

export default ProductQty;
