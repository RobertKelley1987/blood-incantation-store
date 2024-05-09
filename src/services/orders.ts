import { api } from "./api";
import type { CartItem, ShippingAddress } from "../types";

export const orders = {
  create: async (
    email: string,
    shipping: ShippingAddress,
    items: CartItem[]
  ) => {
    return await api.post("/orders", { email, shipping, items });
  },
};
