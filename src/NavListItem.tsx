import { Link, useLocation } from "react-router-dom";

type Category = {
  lowercase: string;
  capitalized: string;
};

type NavListItemProps = {
  category: Category;
  handleClick: () => void;
};

function NavListItem({ category, handleClick }: NavListItemProps) {
  // Get search params from current location
  const { search } = useLocation();
  const selected = search.slice(search.indexOf("=") + 1);

  // Lowercase and uppercase versions of category
  const { lowercase, capitalized } = category;

  // Add red text if this category os selected
  const redText = selected === lowercase ? "text-blood" : "";

  return (
    <li>
      <Link
        to={`/products?category=${lowercase}`}
        className={`text-nowrap hover:text-blood uppercase ${redText}`}
        onClick={handleClick}
      >
        {capitalized}
      </Link>
    </li>
  );
}

export default NavListItem;
