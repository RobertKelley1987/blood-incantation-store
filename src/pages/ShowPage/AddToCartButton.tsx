import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useAddToCartMessage } from "../../hooks/useAddToCartMessage";
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

  return (
    <button
      onClick={handleClick}
      className="uppercase min-w-12 px-6 py-3 border border-black text-center hover:bg-blood"
    >
      {displayMessage ? "Item Added!" : "Add to Cart"}
    </button>
  );
}

export default AddToCartButton;
