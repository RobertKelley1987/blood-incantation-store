import { Navigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { music } from "../../db";
import ShowPage from "../ShowPage/ShowPage";
import Tracklist from "./Tracklist";
import Loading from "../../components/Loading";
import type { Music } from "../../types";
import ErrorBoundary from "../../components/ErrorBoundary";
import ProductErrorPage from "../ProductErrorPage";

function MusicShowPage() {
  const { product, isLoading } = useProduct<Music>(music);

  const renderTracklist = (product: Music) => {
    return <Tracklist tracks={product.tracklist} />;
  };

  const renderShowPage = () => {
    return <ShowPage<Music> product={product} renderInfo={renderTracklist} />;
  };

  return (
    <ErrorBoundary fallback={<ProductErrorPage />}>
      {!isLoading ? renderShowPage() : <p>Loading...</p>}
    </ErrorBoundary>
  );
}

export default MusicShowPage;
