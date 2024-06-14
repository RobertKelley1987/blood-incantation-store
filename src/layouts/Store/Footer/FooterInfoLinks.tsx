import { Link } from "react-router-dom";

function FooterInfoLinks() {
  return (
    <ul>
      <li className="py-1">
        <Link to="/faqs" className="hover:text-blood whitespace-nowrap">
          FAQs
        </Link>
      </li>
      <li className="py-1">
        <Link
          to="/terms-and-conditions"
          className="hover:text-blood whitespace-nowrap"
        >
          Terms and Conditions
        </Link>
      </li>
      <li className="py-1">
        <Link to="/payment" className="hover:text-blood whitespace-nowrap">
          Payment
        </Link>
      </li>
      <li className="py-1">
        <Link
          to="/privacy-policy"
          className="hover:text-blood whitespace-nowrap"
        >
          Privacy Policy
        </Link>
      </li>
    </ul>
  );
}

export default FooterInfoLinks;
