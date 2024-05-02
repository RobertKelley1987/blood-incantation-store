type ButtonProps = {
  text: string;
  handleClick: () => void;
};

function Button({ text, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="uppercase min-w-12 px-6 py-3 border border-black text-center hover:bg-blood"
    >
      {text}
    </button>
  );
}

export default Button;
