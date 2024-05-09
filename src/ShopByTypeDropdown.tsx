import NavListItem from "./NavListItem";
import BackArrowSVG from "./svgs/BackArrowSVG";
import { PRODUCT_CATEGORIES } from "./constants";

type ShopByTypeDropdownProps = {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ShopByTypeDropdown({
  setDropdownOpen,
  setMenuOpen,
}: ShopByTypeDropdownProps) {
  const handleClick = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <ul className="font-normal flex flex-col gap-6 md:gap-2 absolute top-[60px] w-screen bg-white md:border-b border-black left-0 p-6">
      <button
        className="text-left uppercase flex md:hidden items-center gap-3 hover:text-blood"
        onClick={() => setDropdownOpen(false)}
      >
        <BackArrowSVG height="30" width="30" />
        <span>Back</span>
      </button>
      {PRODUCT_CATEGORIES.map((category) => (
        <NavListItem
          key={category.lowercase}
          category={category}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}

export default ShopByTypeDropdown;
