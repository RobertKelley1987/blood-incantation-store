import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowPageQty from "./ShowPageQty";
import ShowPageImgs from "./ShowPageImgs";
import type { ApparelSizesProps } from "../ApparelShowPage/ApparelSizes";
import type { TracklistProps } from "../MusicShowPage/Tracklist";
import type { ApparelInfoProps } from "../ApparelShowPage/ApparelInfo";
import type { Accessory, Apparel, Music, Size } from "../../types";
import AddToCartButton from "./AddToCartButton";
import BackArrowSVG from "../../svgs/BackArrowSVG";

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
  const navigate = useNavigate();
  const { imgs, productName, productType, price } = product;

  const shortDesc = (
    <span>
      {productName} <span className="whitespace-nowrap">{productType}</span>
    </span>
  );

  // Render optional elements
  const options = renderOptions ? renderOptions() : null;
  const info = renderInfo ? renderInfo() : null;

  return (
    <div className="px-6 sm:px-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center uppercase gap-3 mb-6 hover:text-blood"
      >
        <BackArrowSVG size="24" />
        <span>Back</span>
      </button>
      <div className="max-w-screen-lg grid md:grid-cols-2 gap-12">
        <ShowPageImgs imgs={imgs} alt={`${productName} ${productType}`} />
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl uppercase font-semibold">{shortDesc}</h1>
          <p className="text-2xl">${price}</p>
          {options}
          <div className="w-fit flex flex-col gap-6 w-full md:w-min">
            <ShowPageQty qty={qty} setQty={setQty} />
            <AddToCartButton product={product} qty={qty} size={selectedSize} />
          </div>
          {info}
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
