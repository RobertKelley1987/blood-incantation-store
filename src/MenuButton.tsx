import { useContext } from "react";
import { MenuContext } from "./context/MenuContext";
import XSVG from "./svgs/XSVG";
import MenuSVG from "./svgs/MenuSVG";

function MenuButton() {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);

  return (
    <button
      className="flex h-min hover:text-blood z-[100] md:hidden"
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      {menuOpen ? <XSVG height="30" width="30" /> : <MenuSVG />}
    </button>
  );
}

export default MenuButton;
