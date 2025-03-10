function MinusSVG({
  className,
  height = "24",
  width = "24",
}: React.HTMLProps<HTMLOrSVGElement>) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line xmlns="http://www.w3.org/2000/svg" x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default MinusSVG;
