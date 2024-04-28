import ChevronSVG from "../../svgs/ChevronSVG";
import type { SortOption } from "../../types";

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

type SortOptionElement = {
  value: SortOption;
  text: string;
};

// Helper to confirm whether a string is of SortOption type
function isSortOptionType(sortOption: string): sortOption is SortOption {
  const isSortOption = [
    "New to Old",
    "Old to New",
    "A to Z",
    "Z to A",
  ].includes(sortOption);

  if (!isSortOption) {
    throw new Error("Value must be of type SortOption.");
  } else {
    return true;
  }
}

type SortSelectorProps = {
  sortOption: SortOption;
  setSortOption: React.Dispatch<React.SetStateAction<SortOption>>;
};

function SortSelector({ sortOption, setSortOption }: SortSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOption = e.target.value;
    isSortOptionType(sortOption) && setSortOption(sortOption);
  };

  return (
    <div className="w-min grid justify-items-end items-center">
      <ChevronSVG className="row-start-1 col-start-1 mr-2" />
      <select
        className="appearance-none bg-white bg-opacity-0 border border-black hover:border-blood py-2 pl-2 pr-[32px] justify-self-end row-start-1 col-start-1 hover:cursor-pointer active:border-blood focus:outline-none"
        onChange={handleChange}
        value={sortOption}
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
