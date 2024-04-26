import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { MenuContext } from "./context/MenuContext";
import { Link } from "react-router-dom";
import ShopByTypeDropdown from "./ShopByTypeDropdown";
import ForwardArrowSVG from "./svgs/ForwardArrowSVG";

const NAV_STYLES = {
  open: "left-0",
  closed: "left-[-9999px]",
};

type NavProps = {
  dropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav({ dropdownOpen, setDropdownOpen }: NavProps) {
  const totalQty = useContext(CartContext).state.totalQty;
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  const menuStyle = menuOpen ? "open" : "closed";

  const handleClick = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`${NAV_STYLES[menuStyle]} top-0 bg-white w-screen md:w-auto h-screen md:h-auto flex fixed md:static md:z-0`}
    >
      <ul className="p-6 md:p-0 font-sans uppercase font-semibold text-4xl md:text-base flex flex-col md:flex-row mt-[60px] md:mt-0 gap-6 md:gap-12">
        <li>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="text-left flex gap-3 items-center uppercase hover:text-blood"
          >
            Shop By Type
            <ForwardArrowSVG className="md:hidden" size="30" />
          </button>
          {dropdownOpen && (
            <ShopByTypeDropdown
              setDropdownOpen={setDropdownOpen}
              setMenuOpen={setMenuOpen}
            />
          )}
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="/contact"
            className="hover:text-blood"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/cart" className="hover:text-blood">
            Cart {totalQty > 0 && `(${totalQty})`}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
