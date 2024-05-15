import { Link, useLocation } from "react-router-dom";

type PageNumsProps = {
  numPages: number;
  currentPage: number;
};

function PageNums({ numPages, currentPage }: PageNumsProps) {
  const path = useLocation().pathname;

  // Create array of page numbers
  const pageNums: number[] = [];
  for (let i = 0; i < numPages; i++) {
    pageNums.push(i + 1);
  }

  // Render "Next" or "Prev" link
  const renderTextLink = (text: string, pageNum: number) => {
    return (
      <Link
        to={`${path}?page=${pageNum}`}
        className="uppercase hover:text-blood"
      >
        {text}
      </Link>
    );
  };

  // Render page num link
  const renderNumLink = (pageNum: number) => {
    const currentPgStyles = pageNum === currentPage ? "bg-blood" : "";

    return (
      <Link
        key={pageNum}
        to={`${path}?page=${pageNum}`}
        className={`${currentPgStyles} hover:bg-blood w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center border border-black p-3`}
      >
        {pageNum}
      </Link>
    );
  };

  const renderNumLinks = () => {
    let start = currentPage < 4 ? 0 : currentPage - 3;
    let pages = pageNums.slice(start, currentPage + 2);
    return pages.map((pageNum) => renderNumLink(pageNum));
  };

  const nextPagesStyles =
    numPages - currentPage > 3 ? "justify-between" : "justify-end";

  return (
    <div className="flex justify-between items-center w-full gap-3">
      <div className="flex justify-between gap-3 basis-full">
        {currentPage !== 1 && renderTextLink("Prev", currentPage - 1)}
        <div className="hidden gap-3 md:flex">
          {currentPage > 4 && (
            <div className="flex gap-3 items-end">
              {renderNumLink(1)}
              <span>...</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center basis-0 gap-3">
        {renderNumLinks()}
      </div>
      <div className={`flex basis-full gap-3 ${nextPagesStyles}`}>
        {numPages - currentPage > 3 && (
          <div className="hidden md:flex gap-3 items-end">
            <span>...</span>
            {renderNumLink(numPages)}
          </div>
        )}
        {currentPage !== numPages && renderTextLink("Next", currentPage + 1)}
      </div>
    </div>
  );
}

export default PageNums;
