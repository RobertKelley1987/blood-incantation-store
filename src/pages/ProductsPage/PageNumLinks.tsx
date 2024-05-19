import { usePageNum } from "../../hooks/usePageNum";
import PageNumLink from "./PageNumLink";

type PageNumLinksProps = {
  numPages: number;
};

function PageNumLinks({ numPages }: PageNumLinksProps) {
  const { pageNum, setPageNum } = usePageNum();
  // Create array of page numbers
  const pageNums: number[] = [];
  for (let i = 0; i < numPages; i++) {
    pageNums.push(i + 1);
  }

  // Calc 1st page number to display
  const start = pageNum < 4 ? 0 : pageNum - 3;
  // Make array of page links that will be visible based on current page
  const pages = pageNums.slice(start, pageNum + 2);

  return (
    <div className="flex justify-center basis-0 gap-3">
      {pages.map((pageNum) => (
        <PageNumLink key={pageNum} page={pageNum} />
      ))}
    </div>
  );
}

export default PageNumLinks;
