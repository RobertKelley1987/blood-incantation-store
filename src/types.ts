export type Product = {
  id: string;
  price: number;
  productName: string;
  productType: string;
  imgs: string[];
  category: string;
  dateAdded: Date;
};

export type Apparel = Product & {
  color: string;
  manufacturer: string;
  material: string;
};

export type Music = Product & {
  tracklist: string[];
};

export type Accessory = Product & {
  desc: string[];
};

export type ProductType =
  | "t-shirts"
  | "longsleeves"
  | "hoodies"
  | "vinyl"
  | "cds"
  | "patches";

export type ProductCategory = {
  lowercase: ProductType;
  capitalized: string;
};

export type CartProduct = Apparel | Music | Accessory;

export type CartItem = {
  product: Apparel | Music | Accessory;
  qty: number;
  size?: Size;
};

export type ItemAndQty = { id: string; qty: number };

export type Size = "Small" | "Medium" | "Large" | "Extra Large";

export type SortOption = "New to Old" | "Old to New" | "A to Z" | "Z to A";

export type ShippingOption = {
  name: string;
  cost: number;
  days: number;
};

export type FormInput = {
  value: string;
  error: string;
};

export type ContactForm = {
  name: FormInput;
  email: FormInput;
  subject: FormInput;
  message: FormInput;
};

export type ContactFormData = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export type Address = {
  city: string;
  country: string;
  line1: string;
  line2: string | null;
  state: string;
  postal_code: string;
};

export type ShippingAddress = {
  name: string;
  address: Address;
  phone?: string;
};

export type QAndA = {
  question: string;
  answer: string;
};
