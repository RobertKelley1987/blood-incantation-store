import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import RemoveItemSVG from "../../RemoveItemSVG";
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
    <button onClick={handleClick}>
      <RemoveItemSVG />
    </button>
  );
}

export default RemoveItemButton;
