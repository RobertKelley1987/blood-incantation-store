import type { State, Action } from "./types";
import type { CartItem, CartProduct, Size } from "../types";

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
function updateState(updatedCart: CartItem[]): State {
  return {
    items: updatedCart,
    totalQty: calcCartQty(updatedCart),
    totalValue: calcCartVal(updatedCart),
  };
}

// Helper to determine whether 2 products are the same
function productsAreEqual(
  cartItem: CartItem,
  selectedProduct: CartProduct,
  selectedSize?: Size
) {
  return (
    cartItem.product.id === selectedProduct.id && cartItem.size === selectedSize
  );
}

export function cartReducer(state: State, action: Action) {
  const { items } = state;
  const { product, qty, size } = action;
  let updatedItems: CartItem[] | null = null;

  // Index of selected product in the cart
  const productIndex = items.findIndex((item) =>
    productsAreEqual(item, product, size)
  );

  switch (action.type) {
    case "ADD_ITEM":
      updatedItems = [...items];

      // If item is found in cart, increment qty
      if (productIndex !== -1) {
        updatedItems[productIndex].qty += qty;
      } else {
        // Otherwise, add new item
        updatedItems.push({ product, qty, size });
      }
      // Return state with updated total qty and value
      return updateState(updatedItems);
    case "INCREMENT_ITEM":
      updatedItems = [...items];

      // If item is not in cart, do nothing
      if (productIndex === -1) return state;

      // Otherwise, increment found item in cart
      ++updatedItems[productIndex].qty;

      // Return state with updated total qty and value
      return updateState(updatedItems);
    case "DECREMENT_ITEM":
      // If item is not in cart, do nothing
      if (productIndex === -1) return state;

      // If qty of selected item is 1, remove it
      if (items[productIndex].qty === 1) {
        updatedItems = items.filter(
          (item) => !productsAreEqual(item, product, size)
        );
      } else {
        // Otherwise, decrement qty of item in cart
        updatedItems = [...items];
        updatedItems[productIndex].qty -= 1;
      }

      // Return state with updated total qty and value
      return updateState(updatedItems);
    case "REMOVE_ITEM":
      // If item is not in cart, do nothing
      if (productIndex === -1) return state;

      // Otherwise, remove selected item from cart
      const filteredItems = items.filter(
        (item) => !productsAreEqual(item, product, size)
      );

      // Return state with updated total qty and value
      return updateState(filteredItems);
    default:
      return state;
  }
}
