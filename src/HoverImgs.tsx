import { useState } from "react";

type HoverImgsProps = {
  paths: string[];
  alt: string;
  className?: string;
};

function HoverImgs({ paths, alt, className }: HoverImgsProps) {
  const [isHovering, setIsHovering] = useState(false);
  const multipleImgs = paths.length > 1;

  const handleMouseEnter = () => multipleImgs && setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const configStyles = () => {
    let styles = "flex row-start-1 col-start-1";
    if (className) {
      styles += " " + className;
    }
    return styles;
  };

  return (
    <div
      className="grid"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* If product has two images, load the second image first. */}
      {multipleImgs && (
        <img
          className={configStyles()}
          alt={alt}
          src={paths[1]}
          style={{ opacity: isHovering ? 1 : 0 }}
        />
      )}

      {/* 1st image is layered on top of 2nd image. */}
      {/* Opacity changes to zero on mouse hover revealing 2nd image, and reverts on mouse exit*/}
      <img
        className={configStyles()}
        style={{ opacity: isHovering ? 0 : 1 }}
        alt={alt}
        src={paths[0]}
      />
    </div>
  );
}

export default HoverImgs;
