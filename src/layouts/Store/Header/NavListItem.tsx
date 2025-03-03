import { Link } from "react-router-dom";

type Category = {
  lowercase: string;
  capitalized: string;
};

type NavListItemProps = {
  category: Category;
};

function NavListItem({ category }: NavListItemProps) {
  const { lowercase, capitalized } = category;

  return (
    <li>
      <Link
        to={`/collections/${lowercase}`}
        className="text-nowrap hover:text-blood uppercase"
      >
        {capitalized}
      </Link>
    </li>
  );
}

export default NavListItem;
