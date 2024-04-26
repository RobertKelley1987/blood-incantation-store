import { MIN_ITEM_QTY, MAX_ITEM_QTY } from "../../constants";
import ProductQty from "../../ProductQty";

type ShowPageQtyProps = {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
};

function ShowPageQty({ qty, setQty }: ShowPageQtyProps) {
  const increment = () => qty < MAX_ITEM_QTY && setQty((prev) => ++prev);
  const decrement = () => qty > MIN_ITEM_QTY && setQty((prev) => --prev);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold uppercase">Qty</h2>
      <ProductQty
        qty={qty}
        increment={increment}
        decrement={decrement}
        style="big"
      />
    </div>
  );
}

export default ShowPageQty;
