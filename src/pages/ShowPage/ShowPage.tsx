import { useState } from "react";
import ShowPageHeading from "./ShowPageHeading";
import ShowPageQty from "./ShowPageQty";
import ShowPageImgs from "./ShowPageImgs";
import AddToCartButton from "./AddToCartButton";
import BackButton from "./BackButton";
import type {
  Apparel,
  Music,
  Accessory,
  CartProduct,
  Product,
  Size,
} from "../../types";

export type ShowPageProps<T> = {
  product: T | null;
  options?: React.ReactNode;
  renderInfo: (product: T) => React.ReactNode;
  selectedSize?: Size;
};

function ShowPage<T extends Apparel | Music | Accessory>({
  product,
  options,
  renderInfo,
  selectedSize,
}: ShowPageProps<T>) {
  const [qty, setQty] = useState(1);

  if (!product) {
    throw new Error("product not found");
  }

  const { imgs, productName, productType, price } = product;

  return (
    <div className="px-6 sm:px-12">
      <BackButton />
      <div className="max-w-screen-lg grid md:grid-cols-2 gap-12">
        <ShowPageImgs imgs={imgs} alt={`${productName} ${productType}`} />
        <div className="flex flex-col gap-6">
          <ShowPageHeading
            productName={productName}
            productType={productType}
          />
          <p className="text-2xl">${price}</p>
          {/* Optional element for product options, like size for shirts or color for vinyl */}
          {options}
          <div className="w-fit flex flex-col gap-6 w-full md:w-min">
            <ShowPageQty qty={qty} setQty={setQty} />
            <AddToCartButton product={product} qty={qty} size={selectedSize} />
          </div>
          {/* Optional element showing additional data for product, ex: manufacturer for clothing 
            or size in inches for patches */}
          {renderInfo(product)}
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
