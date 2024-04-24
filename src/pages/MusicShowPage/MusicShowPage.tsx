import { Navigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { music } from "../../data";
import ShowPage from "../ShowPage/ShowPage";
import Tracklist from "./Tracklist";
import Loading from "../../components/Loading";
import type { Music } from "../../types";

function MusicShowPage() {
  const { product, isLoading } = useProduct<Music>(music);

  const renderTracklist = () =>
    product ? <Tracklist tracks={product.tracklist} /> : null;

  const renderShowPage = () =>
    !product ? (
      <Navigate to="/404" />
    ) : (
      <ShowPage product={product} renderInfo={renderTracklist} />
    );

  return <Loading isLoading={isLoading}>{renderShowPage()}</Loading>;
}

export default MusicShowPage;
