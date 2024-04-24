import ProductQty from "../../ProductQty";

type ShowPageQtyProps = {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
};

function ShowPageQty({ qty, setQty }: ShowPageQtyProps) {
  const increment = () => setQty((prev) => ++prev);
  const decrement = () => setQty((prev) => --prev);

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
