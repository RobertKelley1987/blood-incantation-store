import { usePageNum } from "../../hooks/usePageNum";

type PageTextLinkProps = {
  page: number;
  text: string;
};

function PageTextLink({ page, text }: PageTextLinkProps) {
  const { setPageNum } = usePageNum();

  return (
    <button
      onClick={() => setPageNum(page)}
      className="uppercase hover:text-blood"
    >
      {text}
    </button>
  );
}

export default PageTextLink;
