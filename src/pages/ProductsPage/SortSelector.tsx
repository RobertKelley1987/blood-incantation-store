import { isSortOptionType } from "../../utils/assertions";
import ChevronSVG from "../../svgs/ChevronSVG";
import type { SetURLSearchParams } from "react-router-dom";
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

type SortSelectorProps = {
  sortBy: string;
  setSortBy: (sortBy: SortOption) => void;
};

function SortSelector({ sortBy, setSortBy }: SortSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOption = e.target.value;
    if (isSortOptionType(sortOption)) setSortBy(sortOption);
  };

  return (
    <div className="w-min grid justify-items-end items-center">
      <ChevronSVG className="row-start-1 col-start-1 mr-2" />
      <select
        className="appearance-none bg-white bg-opacity-0 border border-black hover:border-blood py-2 pl-2 pr-[32px] justify-self-end row-start-1 col-start-1 hover:cursor-pointer active:border-blood focus:outline-none"
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
