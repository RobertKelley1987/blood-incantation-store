import { Link } from "react-router-dom";
import ProductImgs from "./ProductImgs";
import type { Product as ProductType } from "../../types";

type ProductProps = {
  product: ProductType;
};

function Product({ product }: ProductProps) {
  const { id, productName, productType, price, imgs, category } = product;
  const shortDesc = `"${productName}" ${productType}`;

  return (
    <Link
      to={`/${category}/${id}`}
      className="hover:text-blood flex flex-col items-center gap-4"
    >
      <ProductImgs
        paths={imgs.map((img) => `../imgs/${img}`)}
        alt={shortDesc}
      />
      <div className="font-sans uppercase text-center flex flex-col items-center">
        <span>{shortDesc}</span>
        <span>${price}</span>
      </div>
    </Link>
  );
}

export default Product;
