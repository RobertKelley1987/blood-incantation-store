import PlusSVG from "../svgs/PlusSVG";
import MinusSVG from "../svgs/MinusSVG";

type ProductQtyProps = {
  qty: number;
  decrement: () => void;
  increment: () => void;
  style: "big" | "small";
};

const BTN_STYLES = {
  big: "min-w-12 py-3 border border-black hover:bg-blood w-auto px-6",
  small: "min-w-12 py-3 border border-black hover:bg-blood text-sm px-3",
};

const QTY_STYLES = {
  big: "min-w-24 py-3 inline-block text-center border-y border-black w-full md:w-auto",
  small: "min-w-12 py-3 inline-block text-center border-y border-black",
};

function ProductQty({ qty, decrement, increment, style }: ProductQtyProps) {
  return (
    <div className="flex items-center">
      <button className={BTN_STYLES[style]} onClick={decrement}>
        <MinusSVG />
      </button>
      <span className={QTY_STYLES[style]}>{qty}</span>
      <button className={BTN_STYLES[style]} onClick={increment}>
        <PlusSVG />
      </button>
    </div>
  );
}

export default ProductQty;
