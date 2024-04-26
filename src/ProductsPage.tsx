import { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Products from "./Products";

function ProductsPage() {
  return (
    <Fragment>
      <Link to="/" className="flex flex-col">
        <Logo />
      </Link>
      <Products />
    </Fragment>
  );
}

export default ProductsPage;
