import { useProduct } from "./hooks/useProduct";
import { music } from "./data";
import ShowPage from "./ShowPage";
import Tracklist from "./Tracklist";
import type { Music } from "./types";

function MusicShowPage() {
  const { product, isLoading } = useProduct<Music>(music);

  const renderTracklist = () =>
    product ? <Tracklist tracks={product.tracklist} /> : null;

  return product && <ShowPage product={product} renderInfo={renderTracklist} />;
}

export default MusicShowPage;
