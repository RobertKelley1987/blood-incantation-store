import { useProducts } from "./hooks/useProducts";
import Products from "./Products";
import SortSelector from "./SortSelector";

type ProductsPageProps = {
  headingText?: string;
};

function ProductsPage({ headingText }: ProductsPageProps) {
  const { productType, products, isLoading, sortOption, setSortOption } =
    useProducts();

  return (
    <div className="flex flex-col px-12 gap-12 items-end">
      <h1 className="w-full text-7xl font-semibold text-center uppercase">
        {productType ? productType : headingText}
      </h1>
      <SortSelector sortOption={sortOption} setSortOption={setSortOption} />
      <Products products={products} isLoading={isLoading} />
    </div>
  );
}

export default ProductsPage;
