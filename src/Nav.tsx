import NavLink from "./NavLink";

const PRODUCT_CATEGORIES = [
  { lowercase: "t-shirts", capitalized: "T-Shirts" },
  { lowercase: "longsleeves", capitalized: "Longsleeves" },
  { lowercase: "hoodies", capitalized: "Hoodies" },
  { lowercase: "vinyl", capitalized: "Vinyl" },
  { lowercase: "cds", capitalized: "CDs" },
  { lowercase: "patches", capitalized: "Patches" },
];

function Nav() {
  return (
    <nav>
      <ul className="flex gap-12 font-sans uppercase">
        {PRODUCT_CATEGORIES.map((category) => (
          <NavLink category={category} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
