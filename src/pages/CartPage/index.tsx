import { useCart } from "../../hooks/useCart";
import LoadingCart from "./LoadingCart";
import EmptyCartMessage from "./EmptyCartMessage";
import CartPageContent from "./CartPageContent";

function CartPage() {
  const { state, isLoading } = useCart();
  const cartIsEmpty = state.items.length < 1;

  function renderContent() {
    if (isLoading) {
      return <LoadingCart />;
    } else if (state.totalQty < 1) {
      return <EmptyCartMessage />;
    } else {
      return <CartPageContent />;
    }
  }

  const marginBottom = cartIsEmpty ? "mb-4 sm:mb-6" : "mb-12";

  return (
    <div className="w-full max-w-screen-lg flex flex-col px-6 sm:px-12">
      <h1
        className={`text-4xl sm:text-7xl font-semibold text-center ${marginBottom}`}
      >
        CART
      </h1>
      {renderContent()}
    </div>
  );
}

export default CartPage;
