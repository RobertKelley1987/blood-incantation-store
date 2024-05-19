import { usePageNum } from "../../hooks/usePageNum";

type PageLinkProps = {
  page: number;
};

// Render page num link
function PageNumLink({ page }: PageLinkProps) {
  const { pageNum, setPageNum } = usePageNum();
  const currPgStyles = page === pageNum ? "bg-blood" : "";

  return (
    <button
      onClick={() => setPageNum(page)}
      className={`${currPgStyles} hover:bg-blood w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center border border-black p-3`}
    >
      {page}
    </button>
  );
}

export default PageNumLink;
