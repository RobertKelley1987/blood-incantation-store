import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ProductQty from "../../ProductQty";
import type { Accessory, Apparel, Music, Size } from "../../types";

type CartPageQtyProps = {
  product: Apparel | Music | Accessory;
  qty: number;
  size?: Size;
};

function CartPageQty({ product, qty, size }: CartPageQtyProps) {
  const { dispatch } = useContext(CartContext);

  const increment = () =>
    dispatch({ type: "INCREMENT_ITEM", product, qty, size });
  const decrement = () =>
    dispatch({ type: "DECREMENT_ITEM", product, qty, size });

  return (
    <ProductQty
      qty={qty}
      increment={increment}
      decrement={decrement}
      style="small"
    />
  );
}

export default CartPageQty;
