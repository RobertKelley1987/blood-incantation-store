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
    <div className="flex justify-start items-start gap-6">
      <div className="flex gap-6">
        <div className="flex items-start">
          <RemoveItemButton product={product} qty={qty} size={size} />
        </div>
        <div className="flex items-center w-32">
          <img src={`../imgs/${product.imgs[0]}`} alt={imgAlt}></img>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-6 basis-full">
        <div className="flex flex-col gap-1 basis-full">
          <h2>
            "{product.productName}" {product.productType}
          </h2>
          {size && <span className="block">Size: {size}</span>}
          <span className="block">${product.price}</span>
        </div>
        <div className="flex items-center gap-6">
          <CartPageQty product={product} qty={qty} size={size} />
          <span className="hidden md:flex text-end">${itemTotalVal}</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
