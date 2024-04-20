import { Link, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Logo from "./Logo";
import Products from "./Products";
import ApparelShowPage from "./ApparelShowPage/ApparelShowPage";
import MusicShowPage from "./MusicShowPage/MusicShowPage";
import AccessoryShowPage from "./AccessoryShowPage/AccessoryShowPage";
import ErrorPage from "./ErrorPage";

// main app requires 2 separate sub-apps: store and checkout

const APPAREL = ["hoodies", "longsleeves", "t-shirts"];
const MUSIC = ["vinyl", "cds"];
const ACCESSORIES = ["patches"];
const ERROR_ROUTES = ["/404", "*"];

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
          {APPAREL.map((category) => (
            <Route path={`/${category}/:id`} element={<ApparelShowPage />} />
          ))}
          {MUSIC.map((category) => (
            <Route path={`/${category}/:id`} element={<MusicShowPage />} />
          ))}
          {ACCESSORIES.map((category) => (
            <Route path={`/${category}/:id`} element={<AccessoryShowPage />} />
          ))}
          {ERROR_ROUTES.map((path) => (
            <Route path={path} element={<ErrorPage />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
