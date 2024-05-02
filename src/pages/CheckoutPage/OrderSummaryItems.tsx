import type { CartItem } from "../../types";
import OrderSummaryItem from "./OrderSummaryItem";

type OrderSummaryItemsProps = {
  items: CartItem[];
};

function OrderSummaryItems({ items }: OrderSummaryItemsProps) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => {
        // Create unique key for items with same id but different sizes
        const { id } = item.product;
        const key = item.size ? `${id}-${item.size}` : id;

        // Render item
        return <OrderSummaryItem key={key} item={item} />;
      })}
    </div>
  );
}

export default OrderSummaryItems;
