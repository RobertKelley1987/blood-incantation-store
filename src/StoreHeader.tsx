import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

function StoreHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="border-b border-black fixed md:relative z-10 bg-white flex w-full justify-between items-center p-6 h-[60px]">
      <MenuButton />
      <Link onClick={() => setDropdownOpen(false)} to="/">
        <Logo />
      </Link>
      <Nav dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
    </header>
  );
}

export default StoreHeader;
