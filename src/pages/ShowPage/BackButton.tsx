import { useNavigate } from "react-router-dom";
import BackArrowSVG from "../../svgs/BackArrowSVG";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center uppercase gap-3 mb-6 hover:text-blood"
    >
      <BackArrowSVG size="24" />
      <span>Back</span>
    </button>
  );
}

export default BackButton;
