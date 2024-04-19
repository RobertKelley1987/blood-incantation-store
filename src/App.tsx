import { Link, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Products from "./Products";
import HoverImgs from "./HoverImgs";

// main app requires 2 separate sub-apps: store and checkout

function App() {
  return (
    <div>
      <main className="flex flex-col items-center">
        <header className="flex w-full flex-col items-center py-16 gap-12">
          <Link to="/">
            <HoverImgs
              paths={["../imgs/logo.png", "../imgs/logo-red.png"]}
              alt="blood incantation logo"
              className="max-w-80"
            />
          </Link>
        </header>
        <Nav />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:productCategory" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
