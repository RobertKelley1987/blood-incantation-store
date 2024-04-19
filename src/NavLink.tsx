import { Link, useLocation, matchPath } from "react-router-dom";

type Category = {
  lowercase: string;
  capitalized: string;
};

type NavLinkProps = {
  category: Category;
};

function NavLink({ category }: NavLinkProps) {
  // Get params from current location
  const location = useLocation();
  const match = matchPath("/products/:selected", location.pathname);
  const params = match?.params;

  // Lowercase and uppercase versions of category
  const { lowercase, capitalized } = category;

  // Function to add red text color if nav-link is selected
  const isRed = () =>
    params?.selected === lowercase ? "text-blood" : undefined;

  return (
    <li>
      <Link to={`/products/${lowercase}`} className={isRed()}>
        {capitalized}
      </Link>
    </li>
  );
}

export default NavLink;
