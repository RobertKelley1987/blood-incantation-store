import { useProducts } from "../../hooks/useProducts";
import Loading from "../../components/Loading";
import Products from "./Products";
import SortSelector from "./SortSelector";

type ProductsPageProps = {
  headingText?: string;
};

function ProductsPage({ headingText }: ProductsPageProps) {
  const { productType, products, isLoading, sortOption, setSortOption } =
    useProducts();

  return (
    <div className="flex flex-col basis-full grow px-6 sm:px-12 items-end w-full max-w-screen-lg gap-12">
      <h1 className="w-full text-5xl sm:text-7xl font-semibold text-center uppercase">
        {productType ? productType : headingText}
      </h1>
      <SortSelector sortOption={sortOption} setSortOption={setSortOption} />
      <Loading isLoading={isLoading}>
        <Products products={products} />
      </Loading>
    </div>
  );
}

export default ProductsPage;
