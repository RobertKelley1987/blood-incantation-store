import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "./data";
import ProductQty from "./ProductQty";
import type { Product } from "./types";

const CLOTHING_CATEGORIES = ["t-shirts", "longsleeves", "hoodies"];

function ShowPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const product = allProducts.find((product) => product.id === id) || null;
    setProduct(product);
    setIsLoading(false);

    return function reset() {
      setProduct(null);
      setIsLoading(true);
    };
  }, [id]);

  const renderPage = (product: Product) => {
    const { imgs, productName, productType, price } = product;
    const shortDesc = `"${productName}" ${productType}`;

    return (
      <div className="grid grid-cols-2 px-12 gap-12">
        <img src={`../imgs/${imgs[0]}`} alt={shortDesc}></img>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl uppercase font-semibold">{shortDesc}</h1>
          <p className="text-3xl">${price}</p>
          <div className="w-fit flex flex-col gap-6">
            <ProductQty qty={qty} setQty={setQty} />
            <button className="flex justify-center uppercase min-w-12 px-6 py-3 font-semibold border text-center hover:bg-blood">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (product) {
    return renderPage(product);
  } else {
    return <p>We could not find an item with that id.</p>;
  }
}

export default ShowPage;
