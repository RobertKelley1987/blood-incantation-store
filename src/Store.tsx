import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MenuContext } from "./context/MenuContext";
import StoreHeader from "./StoreHeader";

const MARGIN = {
  open: "mt-0",
  closed: "mt-[116px]",
};

function Store() {
  const { menuOpen } = useContext(MenuContext);
  const styleOption = menuOpen ? "open" : "closed";

  return (
    <div className="flex flex-col mb-12 ">
      <StoreHeader />
      <main
        className={`flex flex-col items-center gap-16 ${MARGIN[styleOption]} md:mt-12`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Store;
