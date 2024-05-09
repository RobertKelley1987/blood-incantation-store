import { Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import MenuContextProvider from "./context/MenuContext";
import Store from "./Store";
import HomePage from "./HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ApparelShowPage from "./pages/ApparelShowPage/ApparelShowPage";
import MusicShowPage from "./pages/MusicShowPage/MusicShowPage";
import AccessoryShowPage from "./pages/AccessoryShowPage/AccessoryShowPage";
import CartPage from "./pages/CartPage/CartPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import FourZeroFourPage from "./pages/FourZeroFourPage";
import ServerError from "./ServerError";

// main app requires 2 separate sub-apps: store and checkout

const APPAREL = ["hoodies", "longsleeves", "t-shirts"];
const MUSIC = ["vinyl", "cds"];
const ACCESSORIES = ["patches"];
const NOT_FOUND_ROUTES = ["/404", "*"];

function App() {
  return (
    <CartContextProvider>
      <MenuContextProvider>
        <Routes>
          <Route path="/" element={<Store />}>
            <Route index element={<HomePage />} />
            <Route
              path="/collections/all"
              element={<ProductsPage headingText="All Items" />}
            />
            <Route
              path="/collections/:productType"
              element={<ProductsPage />}
            />
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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/server-error" element={<ServerError />} />
            {NOT_FOUND_ROUTES.map((path) => (
              <Route key={path} path={path} element={<FourZeroFourPage />} />
            ))}
          </Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/checkout/success" element={<div>Success!</div>}></Route>
          <Route
            path="/checkout/server-error"
            element={<ServerError />}
          ></Route>
        </Routes>
      </MenuContextProvider>
    </CartContextProvider>
  );
}

export default App;
