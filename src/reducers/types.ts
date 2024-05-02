import type { CartItem, Apparel, Accessory, Music, Size } from "../types";

export type State = {
  items: CartItem[];
  totalQty: number;
  totalValue: number;
};

export type Action =
  | {
      type: "ADD_ITEM";
      product: Apparel | Accessory | Music;
      qty: number;
      size?: Size;
    }
  | {
      type: "DECREMENT_ITEM";
      product: Apparel | Accessory | Music;
      qty: number;
      size?: Size;
    }
  | {
      type: "INCREMENT_ITEM";
      product: Apparel | Accessory | Music;
      qty: number;
      size?: Size;
    }
  | {
      type: "REMOVE_ITEM";
      product: Apparel | Accessory | Music;
      qty: number;
      size?: Size;
    }
  | {
      type: "SET_CART";
      items: CartItem[];
    };
