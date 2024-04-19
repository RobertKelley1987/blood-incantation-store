import { Link, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Logo from "./Logo";
import Products from "./Products";
import ShowPage from "./ShowPage";
// main app requires 2 separate sub-apps: store and checkout

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
          <Route path="products/:id" element={<ShowPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
