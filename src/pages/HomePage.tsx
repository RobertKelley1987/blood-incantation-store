import { Link } from "react-router-dom";
import { tShirts, longsleeves, vinyl } from "../db";
import Products from "./ProductsPage/Products";
import LinkButton from "../components/LinkButton";

const featuredVinyl = vinyl.slice(0, 3);
const featuredTShirts = tShirts.slice(0, 6);
const featuredLongsleeves = longsleeves.slice(0, 6);

function HomePage() {
  return (
    <div className="flex flex-col items-center basis-full px-6 sm:px-12 items-end w-full max-w-screen-lg gap-12">
      <div className="w-full flex py-9 max-w-80">
        <img
          className="w-full flex row-start-1 col-start-1"
          alt="Blood Incantation band logo"
          src={`../imgs/logo-red.png`}
        />{" "}
      </div>
      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-12 items-center">
          <Link to="/collections/t-shirts" className="hover:text-blood">
            <h1 className="w-full text-5xl sm:text-7xl font-semibold text-center uppercase whitespace-nowrap">
              T-Shirts
            </h1>
          </Link>

          <Products products={featuredTShirts} />
          <LinkButton
            to="/collections/t-shirts"
            text="Shop All T-Shirts"
            grow={false}
          />
        </div>
        <div className="flex flex-col gap-12 items-center">
          <Link to="/collections/longsleeves" className="hover:text-blood">
            <h1 className="w-full text-5xl sm:text-7xl font-semibold text-center uppercase whitespace-nowrap">
              Longsleeves
            </h1>
          </Link>

          <Products products={featuredLongsleeves} />
          <LinkButton
            to="/collections/longsleeves"
            text="Shop All Longsleeves"
            grow={false}
          />
        </div>
        <div className="flex flex-col gap-12 items-center">
          <Link to="/collections/vinyl" className="hover:text-blood">
            <h1 className="w-full text-5xl sm:text-7xl font-semibold text-center uppercase">
              Vinyl
            </h1>
          </Link>

          <Products products={featuredVinyl} />
          <LinkButton
            to="/collections/vinyl"
            text="Shop All Vinyl"
            grow={false}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
