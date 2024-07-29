import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";
import EmptyCartMessage from "./EmptyCartMessage";
import LinkButton from "../../components/LinkButton";

function CartPage() {
  const { state } = useCart();

  const renderCartPage = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9 md:gap-12">
        <div className="flex flex-col gap-9">
          {state.items.map((item) => {
            const key = `${item.product.id}-${item.size}`;
            return <CartItem key={key} item={item} />;
          })}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between text-2xl">
            <span className="font-bold uppercase">Subtotal</span>
            <span>${state.totalValue.toFixed(2)}</span>
          </div>
          <LinkButton to="/checkout" text="Checkout" />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-screen-lg flex flex-col px-6 sm:px-12">
      <h1 className="text-5xl sm:text-7xl font-semibold text-center mb-12">
        CART
      </h1>
      {state.totalQty < 1 ? <EmptyCartMessage /> : renderCartPage()}
    </div>
  );
}

export default CartPage;
