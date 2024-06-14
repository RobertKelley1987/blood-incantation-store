import { useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import { apparel } from "../../db";
import ShowPage from "../ShowPage";
import ApparelSizes from "./ApparelSizes";
import ApparelInfo from "./ApparelInfo";
import ErrorBoundary from "../../components/ErrorBoundary";
import ProductErrorPage from "../ProductErrorPage";
import type { Apparel, Size } from "../../types";

function ApparelShowPage() {
  const { product, isLoading } = useProduct<Apparel>(apparel);
  const [selectedSize, setSelectedSize] = useState<Size>("Small");

  const renderInfo = (product: Apparel) => {
    return <ApparelInfo product={product} />;
  };

  const renderShowPage = () => {
    return (
      <ShowPage<Apparel>
        product={product}
        options={
          <ApparelSizes
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        }
        renderInfo={renderInfo}
        selectedSize={selectedSize}
      />
    );
  };

  return (
    <ErrorBoundary fallback={<ProductErrorPage />}>
      {!isLoading ? renderShowPage() : <p>Loading...</p>}
    </ErrorBoundary>
  );
}

export default ApparelShowPage;
