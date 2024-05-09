import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import XSVG from "../../svgs/XSVG";
import { Apparel, Music, Accessory, Size } from "../../types";

type RemoveItemButtonProps = {
  product: Apparel | Music | Accessory;
  qty: number;
  size?: Size;
};
function RemoveItemButton({ product, qty, size }: RemoveItemButtonProps) {
  const { dispatch } = useContext(CartContext);

  const handleClick = () =>
    dispatch({ type: "REMOVE_ITEM", product, qty, size });

  return (
    <button onClick={handleClick} className="hover:text-blood h-min">
      <XSVG />
    </button>
  );
}

export default RemoveItemButton;
