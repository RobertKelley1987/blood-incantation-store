import OrderSummaryItem from "./OrderSummaryItem";
import type { CartItem } from "../../types";

type OrderSummaryProps = {
  items: CartItem[];
};

function OrderSummary({ items }: OrderSummaryProps) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => {
        return <OrderSummaryItem item={item} />;
      })}
    </div>
  );
}

export default OrderSummary;
