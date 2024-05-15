import { useProducts } from "../../hooks/useProducts";
import usePageNum from "../../hooks/usePageNum";
import Loading from "../../components/Loading";
import Products from "./Products";
import ProductsFilter from "./ProductsFilter";
import SortSelector from "./SortSelector";
import PageNums from "./PageNums";
import type { Product } from "../../types";

const ITEMS_PER_PG = 12;

// Helper to paginate products.
// List of products required as arg.
// Returns an array of product arrays.
function paginate(products: Product[]) {
  const pages: Product[][] = [];
  let page: Product[] = [];
  let i = 0;

  while (i < products.length) {
    if (page.length === ITEMS_PER_PG) {
      console.log(page);
      pages.push(page);
      page = [];
    }

    page.push(products[i]);
    i++;
  }

  // Add final page to arr
  pages.push(page);

  return pages;
}

type ProductsPageProps = {
  headingText?: string;
};

function ProductsPage({ headingText }: ProductsPageProps) {
  const {
    collection,
    products,
    isLoading,
    sortBy,
    setSortBy,
    productTypes,
    setProductTypes,
  } = useProducts();
  const { pageNum } = usePageNum();
  const pages = paginate(products);

  return (
    <div className="flex flex-col basis-full px-6 sm:px-12 items-end w-full max-w-screen-lg gap-12">
      <h1 className="w-full text-5xl sm:text-7xl font-semibold text-center uppercase">
        {collection ? collection : headingText}
      </h1>
      <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
      <div className="flex shrink-0 gap-6">
        {!collection && (
          <ProductsFilter
            productTypes={productTypes}
            setProductTypes={setProductTypes}
          />
        )}
        <Loading isLoading={isLoading}>
          <Products products={pages[pageNum - 1]} />
        </Loading>
      </div>
      {pages.length > 1 && (
        <PageNums numPages={pages.length} currentPage={pageNum} />
      )}
    </div>
  );
}

export default ProductsPage;
