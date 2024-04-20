import { Link, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Logo from "./Logo";
import Products from "./Products";
import ApparelShowPage from "./ApparelShowPage";
import MusicShowPage from "./MusicShowPage";
// main app requires 2 separate sub-apps: store and checkout

const APPAREL_PGS = ["/hoodies/:id", "/longsleeves/:id", "/t-shirts/:id"];
const MUSIC_PGS = ["/vinyl/:id", "/cds/:id"];

function App() {
  return (
    <div>
      <main className="flex flex-col items-center gap-16 my-16">
        <header className="flex w-full flex-col items-center gap-12">
          <Link to="/">
            <Logo />
          </Link>
          <Nav />
        </header>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          {APPAREL_PGS.map((path) => (
            <Route path={path} element={<ApparelShowPage />} />
          ))}
          {MUSIC_PGS.map((path) => (
            <Route path={path} element={<MusicShowPage />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
