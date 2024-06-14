import { useProduct } from "../../hooks/useProduct";
import { music } from "../../db";
import ShowPage from "../ShowPage";
import Tracklist from "./Tracklist";
import ErrorBoundary from "../../components/ErrorBoundary";
import ProductErrorPage from "../ProductErrorPage";
import type { Music } from "../../types";

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
