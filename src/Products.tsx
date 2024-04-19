import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { allProducts } from "./data";
import Product from "./Product";
import { Product as ProductType } from "./types";

function Products() {
  const [products, setProducts] = useState<ProductType[]>(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      const filtered = allProducts.filter(
        (product) => product.category === category
      );
      setProducts(filtered);
    }
    setIsLoading(false);

    return function reset() {
      setIsLoading(true);
      setProducts(allProducts);
      window.scrollTo(0, 0);
    };
  }, [category]);

  const renderList = () => {
    return (
      <div className="grid grid-cols-3 gap-12 max-w-screen-lg px-12">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return isLoading ? <p>Loading...</p> : renderList();
}

export default Products;
