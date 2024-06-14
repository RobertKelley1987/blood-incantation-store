import { usePageNum } from "../../hooks/usePageNum";
import PageNumLink from "./PageNumLink";
import PageTextLink from "./PageTextLink";
import PageNumLinks from "./PageNumLinks";

type PageNumsProps = {
  numPages: number;
};

function PageNums({ numPages }: PageNumsProps) {
  const { pageNum } = usePageNum();

  const nextPagesStyles =
    numPages - pageNum > 3 ? "justify-between" : "justify-end";

  return (
    <div className="flex justify-between items-center w-full gap-3 mt-12 md:mt-0">
      <div className="flex justify-between gap-3 basis-full">
        {pageNum !== 1 && <PageTextLink page={pageNum - 1} text="Prev" />}
        <div className="hidden gap-3 md:flex">
          {pageNum > 4 && (
            <div className="flex gap-3 items-end">
              <PageNumLink page={1} />
              <span>...</span>
            </div>
          )}
        </div>
      </div>
      <PageNumLinks numPages={numPages} />
      <div className={`flex basis-full gap-3 ${nextPagesStyles}`}>
        {numPages - pageNum > 3 && (
          <div className="hidden md:flex gap-3 items-end">
            <span>...</span>
            <PageNumLink page={numPages} />
          </div>
        )}
        {pageNum !== numPages && (
          <PageTextLink page={pageNum + 1} text="Next" />
        )}
      </div>
    </div>
  );
}

export default PageNums;
