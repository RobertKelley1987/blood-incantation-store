import { Navigate } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { accessories } from "../data";
import ShowPage from "../ShowPage";
import AccessoryDescription from "./AccessoryDescription";
import Loading from "../components/Loading";
import type { Accessory } from "../types";

function AccessoryShowPage() {
  const { product, isLoading } = useProduct<Accessory>(accessories);

  const renderDesc = () =>
    product ? <AccessoryDescription desc={product.desc} /> : null;

  const renderShowPage = () =>
    !product ? (
      <Navigate to="/404" />
    ) : (
      <ShowPage product={product} renderInfo={renderDesc} />
    );

  return <Loading isLoading={isLoading}>{renderShowPage()}</Loading>;
}

export default AccessoryShowPage;
