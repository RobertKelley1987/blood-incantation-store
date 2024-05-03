import { Link } from "react-router-dom";

type LinkButtonProps = {
  text: string;
  to: string;
  grow?: boolean;
};

function LinkButton({ text, to, grow = true }: LinkButtonProps) {
  // Attach additional styles
  let styles =
    "uppercase flex justify-center px-6 py-3 border border-black hover:bg-blood";
  if (!grow) {
    styles += " w-max";
  }

  // Return link styled as button
  return (
    <Link to={to} className={styles}>
      {text}
    </Link>
  );
}

export default LinkButton;
