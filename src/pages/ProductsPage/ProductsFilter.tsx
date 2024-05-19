import { useProductTypes } from "../../hooks/useProductTypes";
import { useDropdownWithResize } from "../../hooks/useDropdownWithResize";
import { PRODUCT_CATEGORIES } from "../../constants";
import CategoryCheckbox from "./CategoryCheckbox";
import ChevronSVG from "../../svgs/ChevronSVG";
import { ProductType } from "../../types";

type ProductsFilterProps = {
  productTypes: ProductType[];
  setProductTypes: (productTypes: ProductType[]) => void;
};

function ProductsFilter() {
  const { productTypes, setProductTypes } = useProductTypes();
  const { dropdownOpen, setDropdownOpen } = useDropdownWithResize();

  const renderProductTypes = () => {
    return (
      <div className="flex flex-col gap-2">
        {PRODUCT_CATEGORIES.map((category) => (
          <CategoryCheckbox
            category={category}
            checked={productTypes}
            setChecked={setProductTypes}
          />
        ))}
      </div>
    );
  };

  return (
    <fieldset className="flex flex-col">
      <div
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="flex w-full md:w-auto justify-between md:justify-start py-2 hover:text-blood hover:cursor-pointer"
      >
        <legend className="uppercase font-semibold whitespace-nowrap">
          Product Type
        </legend>
        <ChevronSVG className="inline-block md:hidden" />
      </div>
      {dropdownOpen && renderProductTypes()}
    </fieldset>
  );
}

export default ProductsFilter;
