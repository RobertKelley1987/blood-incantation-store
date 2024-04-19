import { useState } from "react";

function Logo() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="grid"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        className="flex row-start-1 col-start-1"
        style={{ opacity: isHovering ? 1 : 0 }}
        alt="Blood Incantation band logo"
        src="../imgs/logo-red.png"
      />

      <img
        className="flex row-start-1 col-start-1"
        style={{ opacity: isHovering ? 0 : 1 }}
        alt="Blood Incantation band logo"
        src="../imgs/logo.png"
      />
    </div>
  );
}

export default Logo;
