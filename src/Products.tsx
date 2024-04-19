import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "./data";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  const { productCategory } = useParams();

  useEffect(() => {
    if (productCategory) {
      const filtered = allProducts.filter(
        (product) => product.category === productCategory
      );
      setProducts(filtered);
    }
    setIsLoading(false);

    return function reset() {
      setIsLoading(true);
      setProducts(allProducts);
      window.scrollTo(0, 0);
    };
  }, [productCategory]);

  return isLoading ? (
    <p>"Loading..."</p>
  ) : (
    <div className="grid grid-cols-3 gap-12 max-w-screen-lg">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
