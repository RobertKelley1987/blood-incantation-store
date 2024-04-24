import { useState } from "react";

type ShowPageImgsProps = {
  imgs: string[];
  alt: string;
};

function ShowPageImgs({ imgs, alt }: ShowPageImgsProps) {
  const [selectedImg, setSelectedImg] = useState(imgs[0]);
  const isSelected = (img: string) => img === selectedImg;

  // Helper to give selected img higher opacity
  const configOpacity = (img: string) =>
    isSelected(img) ? "opacity-100" : "opacity-60";

  // Helper to calc required grid columns
  const calcGridColumns = () => {
    switch (imgs.length) {
      case 1:
        return "grid-cols-[33.3333333%]";
      case 2:
        return "grid-cols-[33.3333333%_33.3333333%]";
      default:
        return "grid-cols-3";
    }
  };

  const renderAltImgs = () => {
    return (
      <div className={`grid justify-center gap-6 ${calcGridColumns()}`}>
        {imgs.map((img) => (
          <img
            key={img}
            onClick={() => setSelectedImg(img)}
            className={`${configOpacity(
              img
            )} hover:opacity-100 hover:cursor-pointer `}
            src={`../imgs/${img}`}
            alt={alt}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full gap-12">
      <img src={`../imgs/${selectedImg}`} alt={alt} />
      {imgs.length > 1 && renderAltImgs()}
    </div>
  );
}

export default ShowPageImgs;
