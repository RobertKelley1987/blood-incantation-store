import { CartItem } from "../../types";
import RemoveItemButton from "./RemoveItemButton";

type CartItemHeadingProps = {
  item: CartItem;
};

function CartItemHeading({ item }: CartItemHeadingProps) {
  const { product, qty, size } = item;

  return (
    <div className="w-full flex items-start justify-between gap-3">
      <h2 className="text-2xl font-semibold">
        {`"${product.productName}" `}
        <span className="whitespace-nowrap">{product.productType}</span>
      </h2>
      <RemoveItemButton product={product} qty={qty} size={size} />
    </div>
  );
}

export default CartItemHeading;
