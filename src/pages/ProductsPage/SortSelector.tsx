import { useSortBy } from "../../hooks/useSortBy";
import { isSortOptionType } from "../../utils/assertions";
import ChevronSVG from "../../svgs/ChevronSVG";
import type { SortOption } from "../../types";

type SortOptionElement = {
  value: SortOption;
  text: string;
};

const OPTION_ELEMENTS: SortOptionElement[] = [
  {
    value: "A to Z",
    text: "Alphabetically - A to Z",
  },
  {
    value: "Z to A",
    text: "Alphabetically - Z to A",
  },
  {
    value: "New to Old",
    text: "Date - New to Old",
  },
  {
    value: "Old to New",
    text: "Date - Old to New",
  },
];

function SortSelector() {
  const { sortBy, setSortBy } = useSortBy();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOption = e.target.value;
    if (isSortOptionType(sortOption)) setSortBy(sortOption);
  };

  return (
    <div className="w-full md:w-min grid justify-items-end items-center hover:text-blood md:hover:text-black">
      <ChevronSVG className="row-start-1 col-start-1 md:mr-2" />
      <select
        className="w-full md:w-auto [&>*]:hover:text-black appearance-none uppercase font-semibold md:font-normal bg-white bg-opacity-0 md:border border-black hover:border-blood py-2 md:pl-2 md:pr-[32px] justify-self-end row-start-1 col-start-1 hover:cursor-pointer active:border-blood focus:outline-none"
        onChange={handleChange}
        value={sortBy}
      >
        {OPTION_ELEMENTS.map(({ value, text }) => {
          return (
            <option key={value} value={value}>
              {text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SortSelector;
