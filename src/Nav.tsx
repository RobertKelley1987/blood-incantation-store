import { useContext, useRef } from "react";
import { MenuContext } from "./context/MenuContext";
import { Link } from "react-router-dom";
import { useMenuDropdown } from "./hooks/useMenuDropdown";
import ShopByTypeDropdown from "./ShopByTypeDropdown";
import ForwardArrowSVG from "./svgs/ForwardArrowSVG";

function Nav() {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  const leftPosition = menuOpen ? "left-0" : "left-[-9999px]";
  const dropdownWrapper = useRef<HTMLLIElement>(null);
  const { dropdownOpen, setDropdownOpen } = useMenuDropdown(dropdownWrapper);

  return (
    <nav
      className={`${leftPosition} top-0 bg-white w-screen md:w-auto h-screen md:h-auto flex fixed md:static md:z-0`}
    >
      <ul className="p-6 md:p-0 font-sans uppercase font-semibold text-4xl md:text-base flex flex-col md:flex-row mt-[60px] md:mt-0 gap-6 md:gap-12">
        <li>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/collections/all"
            className="hover:text-blood"
          >
            Shop All
          </Link>
        </li>
        <li ref={dropdownWrapper}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="text-left flex gap-3 items-center uppercase hover:text-blood"
          >
            Shop By Type
            <ForwardArrowSVG className="md:hidden" width="30" height="30" />
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
            onClick={() => setMenuOpen(false)}
            to="/contact"
            className="hover:text-blood"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
