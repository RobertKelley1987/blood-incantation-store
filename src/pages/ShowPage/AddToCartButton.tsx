import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useAddToCartMessage } from "../../hooks/useAddToCartMessage";
import Button from "../../components/Button";
import type { Accessory, Apparel, Music, Size } from "../../types";

type AddToCartButtonProps = {
  product: Apparel | Music | Accessory;
  qty: number;
  size?: Size;
};

function AddToCartButton({ product, qty, size }: AddToCartButtonProps) {
  const { dispatch } = useContext(CartContext);
  const { displayMessage, setDisplayMessage } = useAddToCartMessage();

  const handleClick = () => {
    setDisplayMessage(true);
    dispatch({ type: "ADD_ITEM", product, qty, size });
  };

  const buttonText = displayMessage ? "Item Added!" : "Add to Cart";

  return <Button handleClick={handleClick} text={buttonText} />;
}

export default AddToCartButton;
