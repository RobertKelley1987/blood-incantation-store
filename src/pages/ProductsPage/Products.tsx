import Product from "../../Product";
import type { Product as ProductType } from "../../types";

type ProductsProps = {
  products: ProductType[];
};

function Products({ products }: ProductsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-screen-lg">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
