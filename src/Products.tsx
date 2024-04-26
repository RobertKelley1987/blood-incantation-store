import { Link } from "react-router-dom";
import Product from "./Product";
import Loading from "./components/Loading";
import Logo from "./Logo";
import { useProducts } from "./hooks/useProducts";

function Products() {
  const { products, isLoading } = useProducts();

  const renderProducts = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-screen-lg px-12">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return <Loading isLoading={isLoading}>{renderProducts()}</Loading>;
}

export default Products;
