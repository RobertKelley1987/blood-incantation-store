import HoverImgs from "./HoverImgs";
import type { Product as ProductType } from "./types";

type ProductProps = {
  product: ProductType;
};

function Product({ product }: ProductProps) {
  const { productName, productType, price, imgs } = product;
  const shortDesc = `"${productName}" ${productType}`;

  return (
    <div className="flex flex-col items-center gap-4">
      <HoverImgs paths={imgs.map((img) => `../imgs/${img}`)} alt={shortDesc} />
      <div className="font-sans uppercase text-center flex flex-col items-center">
        <span>{shortDesc}</span>
        <span>${price}</span>
      </div>
    </div>
  );
}

export default Product;
