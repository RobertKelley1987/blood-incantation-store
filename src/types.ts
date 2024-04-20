export type Product = {
  id: string;
  price: number;
  productName: string;
  productType: string;
  imgs: string[];
  category: string;
};

export type Apparel = Product & {
  color: string;
  manufacturer: string;
  material: string;
};

export type Music = Product & {
  tracklist: string[];
};

export type Size = "Small" | "Medium" | "Large" | "Extra Large";
