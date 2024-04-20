import { Link, useLocation } from "react-router-dom";

type Category = {
  lowercase: string;
  capitalized: string;
};

type NavLinkProps = {
  category: Category;
};

function NavLink({ category }: NavLinkProps) {
  // Get search params from current location
  const { search } = useLocation();

  // Lowercase and uppercase versions of category
  const { lowercase, capitalized } = category;

  // Function to add red text color if nav-link is selected
  const addRedText = () =>
    search.includes(`category=${lowercase}`) ? "text-blood" : undefined;

  return (
    <li>
      <Link
        to={`/products?category=${lowercase}`}
        className={`text-nowrap hover:text-blood ${addRedText()}`}
      >
        {capitalized}
      </Link>
    </li>
  );
}

export default NavLink;
