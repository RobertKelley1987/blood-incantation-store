import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useScrollingUp } from "./hooks/useScrollingUp";
import { MenuContext } from "./context/MenuContext";
import StoreHeader from "./StoreHeader";
import StoreFooter from "./StoreFooter";

function Store() {
  const { menuOpen } = useContext(MenuContext);
  const { scrollingUp } = useScrollingUp();
  const desktopMargin = scrollingUp ? "md:mt-[116px]" : "md:mt-12";
  const mobileMargin = menuOpen ? "mt-0" : "mt-[116px]";

  return (
    <div className="flex flex-col min-h-screen grow items-center">
      <StoreHeader scrollingUp={scrollingUp} />
      <main
        className={`${mobileMargin} ${desktopMargin} mb-12 flex flex-col basis-full grow items-center justify-center gap-16 w-full`}
      >
        <Outlet />
      </main>
      <StoreFooter />
    </div>
  );
}

export default Store;
