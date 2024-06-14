import { tShirts, longsleeves, vinyl } from "../../db";
import HomePageSection from "./HomePageSection";

const featuredVinyl = vinyl.slice(0, 3);
const featuredTShirts = tShirts.slice(0, 6);
const featuredLongsleeves = longsleeves.slice(0, 6);

function HomePage() {
  return (
    <div className="flex flex-col items-center basis-full px-6 sm:px-12 items-end w-full max-w-screen-lg gap-12">
      <div className="w-full flex py-9 max-w-60 md:max-w-80">
        <img
          className="w-full flex row-start-1 col-start-1"
          alt="Blood Incantation band logo"
          src={`../imgs/logo-red.png`}
        />{" "}
      </div>
      <div className="flex flex-col gap-24">
        <HomePageSection products={featuredTShirts} collection="T-Shirts" />
        <HomePageSection
          products={featuredLongsleeves}
          collection="Longsleeves"
        />
        <HomePageSection products={featuredVinyl} collection="Vinyl" />
      </div>
    </div>
  );
}

export default HomePage;
