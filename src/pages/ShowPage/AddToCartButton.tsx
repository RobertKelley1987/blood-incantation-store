import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../../Button";
import type { Accessory, Apparel, Music, Size } from "../../types";

type AddToCartButtonProps = {
  product: Apparel | Music | Accessory;
  qty: number;
  size?: Size;
};

function AddToCartButton({ product, qty, size }: AddToCartButtonProps) {
  const { dispatch } = useContext(CartContext);

  const handleClick = () => dispatch({ type: "ADD_ITEM", product, qty, size });

  return <Button handleClick={handleClick} text="Add To Cart" />;
}

export default AddToCartButton;
