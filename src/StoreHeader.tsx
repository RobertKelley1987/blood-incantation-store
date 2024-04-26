import Nav from "./Nav";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

function StoreHeader() {
  return (
    <header className="border-b fixed md:relative z-10 bg-white flex w-full justify-between items-center p-6 h-[60px]">
      <MenuButton />
      <Logo />
      <Nav />
    </header>
  );
}

export default StoreHeader;
