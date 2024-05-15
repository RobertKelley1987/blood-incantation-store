import type { ProductCategory, ProductType } from "../../types";

type CategoryCheckboxProps = {
  category: ProductCategory;
  checked: ProductType[];
  setChecked: (productTypes: ProductType[]) => void;
};

function CategoryCheckbox({
  category,
  checked,
  setChecked,
}: CategoryCheckboxProps) {
  const { lowercase, capitalized } = category;
  const isChecked = checked.includes(lowercase);

  const handleChange = () => {
    let updated;
    if (isChecked) {
      updated = checked.filter((checkedItem) => checkedItem !== lowercase);
    } else {
      updated = [...checked, lowercase];
    }
    setChecked(updated);
  };

  return (
    <label className="grid grid-cols-[1em_auto] gap-2 items-center hover:text-blood hover:cursor-pointer">
      <input
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
        value={category.lowercase}
        className="appearance-none m-0 bg-white grid items-center justify-items-center text-current border border-current w-[1.15em] h-[1.15em] -translate-y-[0.075em] before:flex before:scale-0 checked:before:scale-100 before:content-[' '] before:w-[0.65em] before:h-[0.65em] before:bg-blood hover:cursor-pointer"
      />
      <span>{capitalized}</span>
    </label>
  );
}

export default CategoryCheckbox;
