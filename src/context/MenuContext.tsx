import { createContext } from "react";
import { useMenu } from "../hooks/useMenu";

type MenuContextType = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type MenuContextProviderProps = {
  children: React.ReactNode;
};

export const MenuContext = createContext<MenuContextType>({
  menuOpen: false,
  setMenuOpen: () => null,
});

function MenuContextProvider({ children }: MenuContextProviderProps) {
  const { menuOpen, setMenuOpen } = useMenu();

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContextProvider;
