import OrderSummaryItem from "./OrderSummaryItem";
import type { CartItem } from "../../types";

type OrderSummaryProps = {
  items: CartItem[];
  totalValue: number;
  shippingCost: number;
};

function OrderSummary({ items, totalValue, shippingCost }: OrderSummaryProps) {
  const totalDue = (totalValue + shippingCost).toFixed(2);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        {items.map((item) => {
          return <OrderSummaryItem item={item} />;
        })}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shippingCost}</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${totalValue}</span>
        </div>
        <div className="flex justify-between font-semibold text-xl uppercase">
          <span>Total</span>
          <span>${totalDue}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
