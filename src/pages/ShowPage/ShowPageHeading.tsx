type ShowPageHeadingProps = {
  productName: string;
  productType: string;
};

function ShowPageHeading({ productName, productType }: ShowPageHeadingProps) {
  const shortDesc = (
    <span>
      "{productName}" <span className="whitespace-nowrap">{productType}</span>
    </span>
  );

  return (
    <h1 className="text-3xl sm:text-4xl uppercase font-semibold">
      {shortDesc}
    </h1>
  );
}

export default ShowPageHeading;
