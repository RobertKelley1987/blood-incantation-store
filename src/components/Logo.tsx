import { useState } from "react";

type LogoProps = {
  className?: string;
  color?: string;
};
function Logo({ className = "", color = "black" }: LogoProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`grid ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        className="w-full flex row-start-1 col-start-1"
        style={{ opacity: isHovering ? 1 : 0 }}
        alt="Blood Incantation band logo"
        src="../imgs/logo-red.png"
      />

      <img
        className="w-full flex row-start-1 col-start-1"
        style={{ opacity: isHovering ? 0 : 1 }}
        alt="Blood Incantation band logo"
        src={`../imgs/logo-${color}.png`}
      />
    </div>
  );
}

export default Logo;
