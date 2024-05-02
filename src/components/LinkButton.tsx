import { Link } from "react-router-dom";

type LinkButtonProps = {
  text: string;
  path: string;
  className?: string;
};

function LinkButton({ text, path, className }: LinkButtonProps) {
  // Attach any additional styles
  let styles =
    "uppercase flex justify-center px-6 py-3 border border-black hover:bg-blood";
  if (className) {
    styles += " " + className;
  }

  // Return link styled as button
  return (
    <Link to={path} className={styles}>
      {text}
    </Link>
  );
}

export default LinkButton;
