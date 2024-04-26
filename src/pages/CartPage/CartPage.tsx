import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import EmptyCartMessage from "./EmptyCartMessage";
import LinkButton from "../../LinkButton";

function CartPage() {
  const { state } = useContext(CartContext);

  const renderCartPage = () => {
    return (
      <div className="md:max-w-screen-md flex flex-col justify-center px-12">
        <h1 className="text-7xl font-semibold italic text-center mb-12">
          CART
        </h1>
        <div className="flex flex-col gap-9">
          {state.items.map((item) => {
            const key = `${item.product.id}-${item.size}`;
            return <CartItem key={key} item={item} />;
          })}
        </div>
        <div className="flex justify-between text-2xl mt-12 mb-9">
          <span className="font-bold uppercase">Subtotal</span>
          <span>${state.totalValue.toFixed(2)}</span>
        </div>
        <LinkButton path="/checkout" text="Checkout" />
      </div>
    );
  };

  return state.totalQty < 1 ? <EmptyCartMessage /> : renderCartPage();
}

export default CartPage;
