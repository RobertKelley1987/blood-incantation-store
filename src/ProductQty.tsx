import PlusSVG from "./PlusSVG";
import MinusSVG from "./MinusSVG";

type ProductQtyProps = {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
};

const MIN_QTY = 1;
const MAX_QTY = 10;

function ProductQty({ qty, setQty }: ProductQtyProps) {
  const decrement = () => qty > MIN_QTY && setQty((prev) => --prev);
  const increment = () => qty < MAX_QTY && setQty((prev) => ++prev);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold uppercase">Qty</h2>

      <div className="flex items-center w-fit">
        <button
          className="min-w-12 px-6 py-3 border hover:bg-blood"
          onClick={decrement}
        >
          <MinusSVG />
        </button>
        <span className="min-w-24 py-3 inline-block text-center border-y">
          {qty}
        </span>
        <button
          className="min-w-12 px-6 py-3 border hover:bg-blood"
          onClick={increment}
        >
          <PlusSVG />
        </button>
      </div>
    </div>
  );
}

export default ProductQty;
