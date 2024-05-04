import { useContext } from "react";
import { ShippingContext } from "../../context/ShippingContext";
import { CartContext } from "../../context/CartContext";
import OrderSummaryItem from "./OrderSummaryItem";

const borderStyles = "border-b border-solid border-black md:border-none";
const paddingStyles = "p-6 md:pr-12 md:pl-6 md:pt-12";

function OrderSummary() {
  const shipping = useContext(ShippingContext).shippingMethod.cost;
  const { items, totalValue } = useContext(CartContext).state;
  const totalDue = totalValue + shipping;

  return (
    <div className={`${borderStyles} ${paddingStyles} flex flex-col gap-6`}>
      <div className="flex flex-col gap-6">
        {items.map((item) => {
          const { id, productName } = item.product;
          const key = item.size ? `${id}-${item.size}` : id;
          return <OrderSummaryItem key={productName} item={item} />;
        })}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${totalValue.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-xl uppercase">
          <span>Total</span>
          <span>${totalDue.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
