import { useState } from "react";

type ProductImgsProps = {
  paths: string[];
  alt: string;
};

function ProductImgs({ paths, alt }: ProductImgsProps) {
  const [isHovering, setIsHovering] = useState(false);
  const multipleImgs = paths.length > 1;

  return (
    <div
      className="grid"
      onMouseEnter={() => multipleImgs && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* If product has two images, load the second image. */}
      {multipleImgs && (
        <img
          className="flex row-start-1 col-start-1"
          alt={alt}
          src={paths[1]}
        />
      )}

      {/* 1st image is layered on top of 2nd image. */}
      {/* Opacity changes to zero on mouse hover revealing 2nd image, and reverts on mouse exit*/}
      <img
        className="flex row-start-1 col-start-1"
        style={{ opacity: isHovering ? 0 : 1 }}
        alt={alt}
        src={paths[0]}
      />
    </div>
  );
}

export default ProductImgs;
