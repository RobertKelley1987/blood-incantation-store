import { Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import MenuContextProvider from "./context/MenuContext";
import ShippingContextProvider from "./context/ShippingContext";
import Store from "./Store";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ApparelShowPage from "./pages/ApparelShowPage/ApparelShowPage";
import MusicShowPage from "./pages/MusicShowPage/MusicShowPage";
import AccessoryShowPage from "./pages/AccessoryShowPage/AccessoryShowPage";
import CartPage from "./pages/CartPage/CartPage";
import ErrorPage from "./ErrorPage";
import PmtIntentError from "./PmtIntentError";

// main app requires 2 separate sub-apps: store and checkout

const APPAREL = ["hoodies", "longsleeves", "t-shirts"];
const MUSIC = ["vinyl", "cds"];
const ACCESSORIES = ["patches"];
const ERROR_ROUTES = ["/404", "*"];

function App() {
  return (
    <CartContextProvider>
      <MenuContextProvider>
        <Routes>
          <Route path="/" element={<Store />}>
            <Route index element={<ProductsPage headingText="All Items" />} />
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
            {ERROR_ROUTES.map((path) => (
              <Route key={path} path={path} element={<ErrorPage />} />
            ))}
          </Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/checkout/success" element={<div>Success!</div>}></Route>
          <Route path="/checkout/error" element={<PmtIntentError />}></Route>
        </Routes>
      </MenuContextProvider>
    </CartContextProvider>
  );
}

export default App;
