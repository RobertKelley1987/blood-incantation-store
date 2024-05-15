import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useScrollingUp } from "../hooks/useScrollingUp";
import { MenuContext } from "../context/MenuContext";
import StoreHeader from "./StoreHeader/StoreHeader";
import StoreFooter from "./StoreFooter/StoreFooter";

function Store() {
  const { menuOpen } = useContext(MenuContext);
  const { scrollingUp } = useScrollingUp();
  const desktopMargin = scrollingUp ? "md:mt-[116px]" : "md:mt-12";
  const mobileMargin = menuOpen ? "mt-0" : "mt-[116px]";
  const path = useLocation().pathname;

  // Scroll to top of store site every time a user clicks a link
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

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
