import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { apparel } from "../../db";
import ShowPage from "../ShowPage/ShowPage";
import ApparelSizes from "./ApparelSizes";
import ApparelInfo from "./ApparelInfo";
import Loading from "../../components/Loading";
import type { Apparel, Size } from "../../types";

function ApparelShowPage() {
  const { product, isLoading } = useProduct<Apparel>(apparel);
  const [selectedSize, setSelectedSize] = useState<Size>("Small");

  const renderShowPage = () =>
    !product ? (
      <Navigate to="/404" />
    ) : (
      <ShowPage
        product={product}
        options={
          <ApparelSizes
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        }
        info={<ApparelInfo product={product} />}
        selectedSize={selectedSize}
      />
    );

  return <Loading isLoading={isLoading}>{renderShowPage()}</Loading>;
}

export default ApparelShowPage;
