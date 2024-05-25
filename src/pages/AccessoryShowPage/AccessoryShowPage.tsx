import { useProduct } from "../../hooks/useProduct";
import { accessories } from "../../db";
import ShowPage from "../ShowPage/ShowPage";
import AccessoryDescription from "./AccessoryDescription";
import ProductErrorPage from "../ProductErrorPage";
import ErrorBoundary from "../../components/ErrorBoundary";
import type { Accessory } from "../../types";

function AccessoryShowPage() {
  const { product, isLoading } = useProduct<Accessory>(accessories);

  const renderDesc = (product: Accessory) => {
    return <AccessoryDescription desc={product.desc} />;
  };

  const renderShowPage = () => {
    return <ShowPage<Accessory> product={product} renderInfo={renderDesc} />;
  };

  return (
    <ErrorBoundary fallback={<ProductErrorPage />}>
      {!isLoading ? renderShowPage() : <p>Loading...</p>}
    </ErrorBoundary>
  );
}

export default AccessoryShowPage;
