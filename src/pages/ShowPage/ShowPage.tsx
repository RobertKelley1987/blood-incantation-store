import { useState } from "react";
import ShowPageQty from "./ShowPageQty";
import ShowPageImgs from "./ShowPageImgs";
import type { ApparelSizesProps } from "../ApparelShowPage/ApparelSizes";
import type { TracklistProps } from "../MusicShowPage/Tracklist";
import type { ApparelInfoProps } from "../ApparelShowPage/ApparelInfo";
import type { Accessory, Apparel, Music, Size } from "../../types";
import AddToCartButton from "./AddToCartButton";

export type ShowPageProps = {
  product: Accessory | Apparel | Music;
  renderOptions?: () => React.ReactElement<ApparelSizesProps>;
  renderInfo?: () => React.ReactElement<
    ApparelInfoProps | TracklistProps
  > | null;
  selectedSize?: Size;
};

function ShowPage({
  product,
  renderOptions,
  renderInfo,
  selectedSize,
}: ShowPageProps) {
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
        <p className="text-2xl">${price}</p>
        {options}
        <div className="w-fit flex flex-col gap-6">
          <ShowPageQty qty={qty} setQty={setQty} />
          <AddToCartButton product={product} qty={qty} size={selectedSize} />
        </div>
        {info}
      </div>
    </div>
  );
}

export default ShowPage;
