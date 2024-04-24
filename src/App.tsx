import { Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import SiteHeader from "./SiteHeader";
import Products from "./Products";
import ApparelShowPage from "./pages/ApparelShowPage/ApparelShowPage";
import MusicShowPage from "./pages/MusicShowPage/MusicShowPage";
import AccessoryShowPage from "./pages/AccessoryShowPage/AccessoryShowPage";
import CartPage from "./pages/CartPage/CartPage";
import ErrorPage from "./ErrorPage";

// main app requires 2 separate sub-apps: store and checkout

const APPAREL = ["hoodies", "longsleeves", "t-shirts"];
const MUSIC = ["vinyl", "cds"];
const ACCESSORIES = ["patches"];
const ERROR_ROUTES = ["/404", "*"];

function App() {
  return (
    <CartContextProvider>
      <div>
        <SiteHeader />
        <main className="flex flex-col items-center gap-16 my-12">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            {APPAREL.map((category) => (
              <Route
                key={category}
                path={`/${category}/:id`}
                element={<ApparelShowPage />}
              />
            ))}
            {MUSIC.map((category) => (
              <Route
                key={category}
                path={`/${category}/:id`}
                element={<MusicShowPage />}
              />
            ))}
            {ACCESSORIES.map((category) => (
              <Route
                key={category}
                path={`/${category}/:id`}
                element={<AccessoryShowPage />}
              />
            ))}
            <Route path="/cart" element={<CartPage />} />
            {ERROR_ROUTES.map((path) => (
              <Route key={path} path={path} element={<ErrorPage />} />
            ))}
          </Routes>
        </main>
      </div>
    </CartContextProvider>
  );
}

export default App;
