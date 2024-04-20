import { useState } from "react";
import ProductQty from "./ProductQty";
import ShowPageImgs from "./ShowPageImgs";
import type { Product, Apparel, Music } from "./types";
import type { ApparelSizesProps } from "./ApparelShowPage/ApparelSizes";
import type { TracklistProps } from "./MusicShowPage/Tracklist";
import type { ApparelInfoProps } from "./ApparelShowPage/ApparelInfo";

export type ShowPageProps = {
  product: Product | Apparel | Music;
  renderOptions?: () => React.ReactElement<ApparelSizesProps>;
  renderInfo?: () => React.ReactElement<
    ApparelInfoProps | TracklistProps
  > | null;
};

function ShowPage({ product, renderOptions, renderInfo }: ShowPageProps) {
  const [qty, setQty] = useState(1);
  const { imgs, productName, productType, price } = product;
  const shortDesc = `"${productName}" ${productType}`;

  // Render optional elements
  const options = renderOptions ? renderOptions() : null;
  const info = renderInfo ? renderInfo() : null;

  return (
    <div className="max-w-screen-lg grid grid-cols-2 px-12 gap-12">
      <ShowPageImgs imgs={imgs} alt={shortDesc} />
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl uppercase font-semibold">{shortDesc}</h1>
        <p className="text-3xl">${price}</p>
        {options}
        <div className="w-fit flex flex-col gap-6">
          <ProductQty qty={qty} setQty={setQty} />
          <button className="flex justify-center uppercase min-w-12 px-6 py-3 font-semibold border text-center hover:bg-blood">
            Add To Cart
          </button>
        </div>
        {info}
      </div>
    </div>
  );
}

export default ShowPage;
