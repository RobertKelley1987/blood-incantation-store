import { useState } from "react";
import { useProduct } from "./hooks/useProduct";
import { apparel } from "./data";
import ShowPage from "./ShowPage";
import ApparelSizes from "./ApparelSizes";
import ApparelInfo from "./ApparelInfo";
import type { Apparel, Size } from "./types";

function ApparelShowPage() {
  const { product, isLoading } = useProduct<Apparel>(apparel);
  const [selectedSize, setSelectedSize] = useState<Size>("Small");

  const renderSizes = () => (
    <ApparelSizes
      selectedSize={selectedSize}
      setSelectedSize={setSelectedSize}
    />
  );

  const renderInfo = () => (product ? <ApparelInfo product={product} /> : null);

  return (
    product && (
      <ShowPage
        product={product}
        renderOptions={renderSizes}
        renderInfo={renderInfo}
      />
    )
  );
}

export default ApparelShowPage;
