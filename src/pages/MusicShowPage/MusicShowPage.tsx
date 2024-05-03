import { Navigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { music } from "../../db";
import ShowPage from "../ShowPage/ShowPage";
import Tracklist from "./Tracklist";
import Loading from "../../components/Loading";
import type { Music } from "../../types";

function MusicShowPage() {
  const { product, isLoading } = useProduct<Music>(music);

  const renderShowPage = () =>
    !product ? (
      <Navigate to="/404" />
    ) : (
      <ShowPage
        product={product}
        info={<Tracklist tracks={product.tracklist} />}
      />
    );

  return <Loading isLoading={isLoading}>{renderShowPage()}</Loading>;
}

export default MusicShowPage;
