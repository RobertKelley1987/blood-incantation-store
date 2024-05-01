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
    <div className="grid grid-cols-[1fr_2fr] gap-6 items-start">
      <div className="flex items-center pt-2">
        <img src={`../imgs/${product.imgs[0]}`} alt={imgAlt}></img>
      </div>
      <div className="flex flex-col items-start gap-3 basis-full">
        <div className="w-full flex items-start justify-between gap-3">
          <h2 className="text-2xl font-semibold">
            "{product.productName}"{" "}
            <span className="whitespace-nowrap">{product.productType}</span>
          </h2>
          <RemoveItemButton product={product} qty={qty} size={size} />
        </div>
        {size && <span className="block">Size: {size}</span>}
        <span className="block text-xl">${product.price}</span>
        <CartPageQty product={product} qty={qty} size={size} />
        <span className="hidden md:flex text-end text-xl">
          <span className="font-semibold mr-2">Total: </span> ${itemTotalVal}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
