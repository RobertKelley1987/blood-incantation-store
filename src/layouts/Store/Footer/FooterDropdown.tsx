import { useDropdownWithResize } from "../../../hooks/useDropdownWithResize";
import ChevronSVG from "../../../components/svgs/ChevronSVG";

type FooterDropdownProps = {
  heading: string;
  children: React.ReactNode;
};

function FooterDropdown({ heading, children }: FooterDropdownProps) {
  const { dropdownOpen, setDropdownOpen } = useDropdownWithResize();

  return (
    <div className="w-full md:row-span-2">
      <div
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="py-1 md:py-0 flex justify-between w-full hover:text-blood hover:cursor-pointer hover:md:text-black hover:md:cursor-auto"
      >
        <h2 className="uppercase font-semibold py-0 md:py-1">{heading}</h2>
        <ChevronSVG
          className={`md:hidden ${dropdownOpen ? "rotate-180" : ""}`}
        />
      </div>
      {dropdownOpen && children}
    </div>
  );
}

export default FooterDropdown;
