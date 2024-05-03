import type { State, Action } from "./types";
import type { CartItem, CartProduct, Size } from "../types";
import { updateState, itemIsEqual, findItemIndex } from "./helpers";

export function cartReducer(state: State, action: Action) {
  const { items } = state;
  let product: CartProduct;
  let qty: number;
  let size: Size | undefined;
  let updatedItems: CartItem[] | null = null;
  let productIndex;

  switch (action.type) {
    case "ADD_ITEM":
      updatedItems = [...items];
      product = action.product;
      qty = action.qty;
      size = action.size;

      // Try to locate item in cart
      productIndex = findItemIndex(items, product.id, size);

      // If item is already in cart, increment qty
      if (productIndex !== -1) {
        updatedItems[productIndex].qty += qty;
      } else {
        // Otherwise, add new item
        updatedItems.push({ product, qty, size });
      }
      // Return state with updated totals
      return updateState(updatedItems);
    case "INCREMENT_ITEM":
      updatedItems = [...items];
      product = action.product;
      qty = action.qty;
      size = action.size;

      // Find index of incremented item in cart
      productIndex = findItemIndex(items, product.id, size);

      // If item is not in cart, do nothing
      if (productIndex === -1) return state;

      // Otherwise, increment item and update state
      ++updatedItems[productIndex].qty;
      return updateState(updatedItems);
    case "DECREMENT_ITEM":
      product = action.product;
      qty = action.qty;
      size = action.size;

      // Find index of decremented item in cart
      productIndex = findItemIndex(items, product.id, size);

      // If item is not in cart, do nothing
      if (productIndex === -1) return state;

      // If qty of selected item is 1, remove it
      if (items[productIndex].qty === 1) {
        updatedItems = items.filter(
          (item) => !itemIsEqual(item, product.id, size)
        );
      } else {
        // Otherwise, decrement qty of item in cart
        updatedItems = [...items];
        updatedItems[productIndex].qty -= 1;
      }

      // Return state with updated totals
      return updateState(updatedItems);
    case "REMOVE_ITEM":
      product = action.product;
      qty = action.qty;
      size = action.size;

      // Find index of item in cart
      productIndex = findItemIndex(items, product.id, size);

      // If item is not in cart, do nothing
      if (productIndex === -1) return state;

      // Otherwise, remove selected item from cart
      const filteredItems = items.filter(
        (item) => !itemIsEqual(item, product.id, size)
      );

      // Return state with updated total qty and value
      return updateState(filteredItems);
    case "SET_CART":
      return updateState(action.items);
    default:
      return state;
  }
}
