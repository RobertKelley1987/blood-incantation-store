import { Apparel } from "../types";

export type ApparelInfoProps = {
  product: Apparel;
};

function ApparelInfo({ product }: ApparelInfoProps) {
  const { color, manufacturer, material } = product;

  return (
    <ul className="uppercase flex flex-col gap-2">
      <li>
        <span className="font-semibold">Color</span> - {color}
      </li>
      <li>
        <span className="font-semibold">Manufacturer</span> - {manufacturer}
      </li>
      <li>
        <span className="font-semibold">Material</span> - {material}
      </li>
    </ul>
  );
}

export default ApparelInfo;
