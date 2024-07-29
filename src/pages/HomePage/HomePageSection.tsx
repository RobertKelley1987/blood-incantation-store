import { Link } from "react-router-dom";
import Products from "../ProductsPage/Products";
import LinkButton from "../../components/LinkButton";
import { Product } from "../../types";

type HomePageSectionProps = {
  products: Product[];
  collection: string; // Should be capitalized and plural
};

function HomePageSection({ products, collection }: HomePageSectionProps) {
  const slug = collection.toLowerCase();

  return (
    <section className="flex flex-col gap-12 items-center">
      <Link to={`/collections/${slug}`} className="hover:text-blood">
        <h1 className="w-full text-4xl sm:text-7xl font-semibold text-center uppercase">
          {collection}
        </h1>
      </Link>

      <Products products={products} />
      <LinkButton
        to={`/collections/${slug}`}
        text={`Shop All ${collection}`}
        grow={false}
      />
    </section>
  );
}

export default HomePageSection;
