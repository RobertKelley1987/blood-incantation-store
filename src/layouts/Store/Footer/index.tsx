import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";
import FooterSocials from "./FooterSocials";
import FooterInfoLinks from "./FooterInfoLinks";
import FooterDropdown from "./FooterDropdown";

function Footer() {
  return (
    <footer className="w-full border-t border-black">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[auto_24px] gap-4 md:gap-x-9 px-6 py-12 md:p-12 w-full max-w-screen-lg justify-items-center md:justify-items-start">
        <a href="/" className="max-w-40 md:w-full">
          <Logo />
        </a>

        <FooterDropdown heading="Information">
          <FooterInfoLinks />
        </FooterDropdown>

        <FooterDropdown heading="Customer Support">
          <p className="py-1">
            <Link to="/contact" className="underline hover:text-blood">
              Contact us
            </Link>{" "}
            for any order related questions.
          </p>
        </FooterDropdown>

        <FooterSocials />
      </div>
    </footer>
  );
}

export default Footer;
