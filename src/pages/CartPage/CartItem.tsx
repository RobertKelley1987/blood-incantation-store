import { Link } from "react-router-dom";
import { CartItem as CartItemType } from "../../types";
import CartItemData from "./CartItemData";
import CartItemHeading from "./CartItemHeading";

type CartItemProps = {
  item: CartItemType;
};

function CartItem({ item }: CartItemProps) {
  const { productName, productType, imgs, category, id } = item.product;
  const imgAlt = `"${productName}" ${productType}`;

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-6 items-start">
      <Link to={`/${category}/${id}`} className="flex items-center pt-2">
        <img src={`../imgs/${imgs[0]}`} alt={imgAlt}></img>
      </Link>
      <div className="flex flex-col items-start gap-3 basis-full">
        <CartItemHeading item={item} />
        <CartItemData item={item} />
      </div>
    </div>
  );
}

export default CartItem;
