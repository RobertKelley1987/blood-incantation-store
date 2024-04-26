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

export type CartProduct = Apparel | Music | Accessory;

export type CartItem = {
  product: Apparel | Music | Accessory;
  qty: number;
  size?: Size;
};

export type Size = "Small" | "Medium" | "Large" | "Extra Large";

export type SortOption = "New to Old" | "Old to New" | "A to Z" | "Z to A";
