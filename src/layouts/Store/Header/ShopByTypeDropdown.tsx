import NavListItem from "./NavListItem";
import BackArrowSVG from "../../../components/svgs/BackArrowSVG";
import { PRODUCT_CATEGORIES } from "../../../constants";

type ShopByTypeDropdownProps = {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ShopByTypeDropdown({ setDropdownOpen }: ShopByTypeDropdownProps) {
  return (
    <ul className="font-normal flex flex-col gap-6 md:gap-2 absolute top-[60px] w-screen bg-white md:border-b border-black left-0 p-6 pt-1 md:pt-6">
      <button
        className="text-left uppercase flex md:hidden items-center gap-3 hover:text-blood"
        onClick={() => setDropdownOpen(false)}
      >
        <BackArrowSVG height="30" width="30" />
        <span>Back</span>
      </button>
      {PRODUCT_CATEGORIES.map((category) => (
        <NavListItem key={category.lowercase} category={category} />
      ))}
    </ul>
  );
}

export default ShopByTypeDropdown;
