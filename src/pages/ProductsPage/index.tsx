import { useProducts } from "../../hooks/useProducts";
import { usePageNum } from "../../hooks/usePageNum";
import { paginate } from "../../utils/paginate";
import Products from "./Products";
import ProductsFilter from "./ProductsFilter";
import SortSelector from "./SortSelector";
import PageNums from "./PageNums";

type ProductsPageProps = {
  headingText?: string;
};

function ProductsPage({ headingText }: ProductsPageProps) {
  const { collection, products, isLoading } = useProducts();
  const { pageNum } = usePageNum();
  const pages = paginate(products);

  const renderProductsPage = () => {
    return (
      <>
        <SortSelector />
        <div
          className={`flex flex-col md:flex-row shrink-0 gap-6 w-full ${
            collection ? "mt-6 md:mt-0" : undefined
          }`}
        >
          {!collection && <ProductsFilter />}
          <Products products={pages[pageNum - 1]} />
        </div>
        {pages.length > 1 && <PageNums numPages={pages.length} />}
      </>
    );
  };

  return (
    <div className="flex flex-col basis-full px-6 sm:px-12 items-end w-full max-w-screen-lg md:gap-12">
      <h1 className="w-full text-4xl sm:text-7xl font-semibold text-center uppercase mb-6 md:mb-0">
        {collection ? collection : headingText}
      </h1>
      {!isLoading ? renderProductsPage() : <p>Loading...</p>}
    </div>
  );
}

export default ProductsPage;
