import Product from "./Product";
import Loading from "./components/Loading";
import type { Product as ProductType } from "./types";

type ProductsProps = {
  products: ProductType[];
  isLoading: boolean;
};

function Products({ products, isLoading }: ProductsProps) {
  const renderProducts = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-screen-lg">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return <Loading isLoading={isLoading}>{renderProducts()}</Loading>;
}

export default Products;
