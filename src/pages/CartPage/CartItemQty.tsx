import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MAX_ITEM_QTY } from "../../constants";
import ProductQty from "../../components/ProductQty";
import type { Accessory, Apparel, Music, Size } from "../../types";

type CartItemQtyProps = {
  product: Apparel | Music | Accessory;
  qty: number;
  size?: Size;
};

function CartItemQty({ product, qty, size }: CartItemQtyProps) {
  const { dispatch } = useContext(CartContext);

  const increment = () =>
    qty < MAX_ITEM_QTY &&
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

export default CartItemQty;
