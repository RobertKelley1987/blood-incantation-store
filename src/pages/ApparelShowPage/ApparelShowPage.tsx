import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { apparel } from "../../data";
import ShowPage from "../ShowPage/ShowPage";
import ApparelSizes from "./ApparelSizes";
import ApparelInfo from "./ApparelInfo";
import Loading from "../../components/Loading";
import type { Apparel, Size } from "../../types";

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

  const renderShowPage = () =>
    !product ? (
      <Navigate to="/404" />
    ) : (
      <ShowPage
        product={product}
        renderOptions={renderSizes}
        renderInfo={renderInfo}
        selectedSize={selectedSize}
      />
    );

  return <Loading isLoading={isLoading}>{renderShowPage()}</Loading>;
}

export default ApparelShowPage;
