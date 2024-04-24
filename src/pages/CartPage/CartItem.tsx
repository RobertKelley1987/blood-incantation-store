import { CartItem as CartItemType } from "../../types";
import CartPageQty from "./CartPageQty";
import RemoveItemButton from "./RemoveItemButton";

type CartItemProps = {
  item: CartItemType;
};

function CartItem({ item }: CartItemProps) {
  const { product, qty, size } = item;
  const { productName, productType } = product;
  const imgAlt = `"${productName}" ${productType}`;
  const itemTotalVal = (product.price * qty).toFixed(2);

  return (
    <div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] items-center gap-9">
      <RemoveItemButton product={product} qty={qty} size={size} />
      <img src={`../imgs/${product.imgs[0]}`} alt={imgAlt}></img>
      <div className="flex flex-col gap-3">
        <h2>
          "{product.productName}" {product.productType}
        </h2>
        {size && <span className="block">Size: {size}</span>}
        <span className="block">${product.price}</span>
      </div>
      <CartPageQty product={product} qty={qty} size={size} />
      <span className="text-end">{itemTotalVal}</span>
    </div>
  );
}

export default CartItem;
