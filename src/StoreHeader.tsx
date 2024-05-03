import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import CartLink from "./CartLink";

type StoreHeaderProps = {
  scrollingUp: boolean;
};

function StoreHeader({ scrollingUp }: StoreHeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  let classNames =
    "border-b border-black fixed md:static z-10 bg-white flex w-full justify-between items-center p-6 h-[60px]";

  if (scrollingUp) {
    classNames += " md:fixed";
  }

  return (
    <header className={classNames}>
      <MenuButton />
      <Link onClick={() => setDropdownOpen(false)} to="/">
        <Logo className="max-w-16" />
      </Link>
      <Nav dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
      <CartLink />
    </header>
  );
}

export default StoreHeader;
