import { useProducts } from "../../hooks/useProducts";
import { usePageNum } from "../../hooks/usePageNum";
import { paginate } from "../../utils/paginate";
import Loading from "../../components/Loading";
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

  return (
    <div className="flex flex-col basis-full px-6 sm:px-12 items-end w-full max-w-screen-lg md:gap-12">
      <h1 className="w-full text-5xl sm:text-7xl font-semibold text-center uppercase mb-6 md:mb-0">
        {collection ? collection : headingText}
      </h1>
      <SortSelector />
      <div
        className={`flex flex-col md:flex-row shrink-0 gap-6 ${
          collection ? "mt-6 md:mt-0" : undefined
        }`}
      >
        {!collection && <ProductsFilter />}
        <Loading isLoading={isLoading}>
          <Products products={pages[pageNum - 1]} />
        </Loading>
      </div>
      {pages.length > 1 && <PageNums numPages={pages.length} />}
    </div>
  );
}

export default ProductsPage;
