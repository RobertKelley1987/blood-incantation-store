import { Fragment } from "react";
import CartItemQty from "./CartItemQty";
import type { CartItem } from "../../types";

type CartItemDataProps = {
  item: CartItem;
};

function CartItemData({ item }: CartItemDataProps) {
  const { size, product, qty } = item;
  const itemTotalVal = (product.price * qty).toFixed(2);

  return (
    <Fragment>
      {size && <span className="block">Size: {size}</span>}
      <span className="block text-xl">${product.price}</span>
      <CartItemQty product={product} qty={qty} size={size} />
      <span className="hidden md:flex text-end text-xl">
        <span className="font-semibold mr-2">Total: </span> ${itemTotalVal}
      </span>{" "}
    </Fragment>
  );
}

export default CartItemData;
