import { useEffect, useState } from "react";
import { PRODUCT_CATEGORIES } from "../../constants";
import CategoryCheckbox from "./CategoryCheckbox";
import { ProductType } from "../../types";

type ProductsFilterProps = {
  productTypes: ProductType[];
  setProductTypes: (productTypes: ProductType[]) => void;
};

function ProductsFilter({
  productTypes,
  setProductTypes,
}: ProductsFilterProps) {
  return (
    <fieldset className="flex flex-col">
      <legend className="uppercase font-semibold whitespace-nowrap">
        Product Type
      </legend>
      {PRODUCT_CATEGORIES.map((category) => (
        <CategoryCheckbox
          category={category}
          checked={productTypes}
          setChecked={setProductTypes}
        />
      ))}
    </fieldset>
  );
}

export default ProductsFilter;
