import type { CartItem } from "../../types";

type OrderSummaryItemProps = {
  item: CartItem;
};

function OrderSummaryItem({ item }: OrderSummaryItemProps) {
  const { product, size, qty } = item;

  return (
    <div className="grid grid-cols-[100px_3fr_1fr] items-start gap-3">
      <img src={`../imgs/${product.imgs[0]}`} />
      <div>
        <span className="block uppercase">
          "{product.productName}" {product.productType}
        </span>
        {size && <span className="block text-sm">Size: {size}</span>}
        <span className="block text-sm">Qty: {qty}</span>
      </div>
      <span className="text-end">${product.price * qty}</span>
    </div>
  );
}

export default OrderSummaryItem;
