import FacebookSVG from "./svgs/FacebookSVG";
import InstagramSVG from "./svgs/InstagramSVG";
import SpotifySVG from "./svgs/SpotifySVG";
import YoutubeSVG from "./svgs/YoutubeSVG";

function FooterSocials() {
  return (
    <ul className="flex gap-3 col-start-1 md:row-start-2 py-1 md:py-0">
      <li>
        <a
          className="hover:text-blood"
          href="https://www.facebook.com/BloodIncantationOfficial/"
          target="_blank"
          rel="noopener"
        >
          <FacebookSVG />
        </a>
      </li>
      <li>
        <a
          className="hover:text-blood"
          href="https://www.instagram.com/bloodincantationofficial/"
          target="_blank"
          rel="noopener"
        >
          <InstagramSVG />
        </a>
      </li>
      <li>
        <a
          className="hover:text-blood"
          href="https://open.spotify.com/artist/6FGv87WQ3mJWn3cmLUww6x"
          target="_blank"
          rel="noopener"
        >
          <SpotifySVG />
        </a>
      </li>
      <li>
        <a
          className="hover:text-blood"
          href="https://www.youtube.com/channel/UCz4EMljmmFlcOcxJMazlw_Q"
          target="_blank"
          rel="noopener"
        >
          <YoutubeSVG />
        </a>
      </li>
    </ul>
  );
}

export default FooterSocials;
