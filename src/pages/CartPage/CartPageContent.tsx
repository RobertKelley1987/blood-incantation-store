import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";
import LinkButton from "../../components/LinkButton";

function CartPageContent() {
  const { items, totalValue } = useCart().state;
  const cartIsEmpty = items.length < 1;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9 md:gap-12">
      <div className="flex flex-col gap-9">
        {items.map((item) => {
          const key = `${item.product.id}-${item.size}`;
          return <CartItem key={key} item={item} />;
        })}
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between text-2xl">
          <span className="font-bold uppercase">Subtotal</span>
          <span>${totalValue.toFixed(2)}</span>
        </div>
        <LinkButton to="/checkout" text="Checkout" />
      </div>
    </div>
  );
}

export default CartPageContent;
