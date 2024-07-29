import { api } from "./api";
import { ContactFormData } from "../types";

export const contact = {
  sendMail: async (formData: ContactFormData) => {
    const { data } = await api.post("/contact", formData);
    return data;
  },
};
