import { useCart } from "../../hooks/useCart";
import XSVG from "../../components/svgs/XSVG";
import { Apparel, Music, Accessory, Size } from "../../types";

type RemoveItemButtonProps = {
  product: Apparel | Music | Accessory;
  qty: number;
  size?: Size;
};
function RemoveItemButton({ product, qty, size }: RemoveItemButtonProps) {
  const { dispatch } = useCart();

  const handleClick = () =>
    dispatch({ type: "REMOVE_ITEM", product, qty, size });

  return (
    <button onClick={handleClick} className="hover:text-blood h-min">
      <XSVG />
    </button>
  );
}

export default RemoveItemButton;
