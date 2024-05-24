import type { State } from "./types";
import type { CartItem, Size } from "../types";

// Helper to calculate total number of items in cart
function calcCartQty(cart: CartItem[]) {
  return cart.reduce((prev, curr) => (prev += curr.qty), 0);
}

// Helper to calculate total value of cart items
function calcCartVal(cart: CartItem[]) {
  return cart.reduce(
    (prev, curr) => (prev += curr.qty * curr.product.price),
    0
  );
}

// Helper to return updated state with total vals
export function updateState(updatedCart: CartItem[]): State {
  return {
    items: updatedCart,
    totalQty: calcCartQty(updatedCart),
    totalValue: calcCartVal(updatedCart),
  };
}

// Helper to update cart in local storage
export function updateLocalStorage(cart: CartItem[]) {
  const jsonCart = JSON.stringify(cart);
  localStorage.setItem("blood-cart", jsonCart);
}

// Helper to determine whether 2 products are the same
export function itemIsEqual(
  cartItem: CartItem,
  productId: string,
  size?: Size
) {
  return cartItem.product.id === productId && cartItem.size === size;
}

export function findItemIndex(
  items: CartItem[],
  productId: string,
  size?: Size
) {
  return items.findIndex((item) => itemIsEqual(item, productId, size));
}
