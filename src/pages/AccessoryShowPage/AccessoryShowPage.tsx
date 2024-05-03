import { Navigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { accessories } from "../../db";
import ShowPage from "../ShowPage/ShowPage";
import AccessoryDescription from "./AccessoryDescription";
import Loading from "../../components/Loading";
import type { Accessory } from "../../types";

function AccessoryShowPage() {
  const { product, isLoading } = useProduct<Accessory>(accessories);

  const renderShowPage = () =>
    !product ? (
      <Navigate to="/404" />
    ) : (
      <ShowPage
        product={product}
        info={<AccessoryDescription desc={product.desc} />}
      />
    );

  return <Loading isLoading={isLoading}>{renderShowPage()}</Loading>;
}

export default AccessoryShowPage;
