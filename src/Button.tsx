type ButtonProps = {
  text: string;
  handleClick: () => void;
};

function Button({ text, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="flex justify-center uppercase min-w-12 px-6 py-3 font-semibold border text-center hover:bg-blood"
    >
      {text}
    </button>
  );
}

export default Button;
