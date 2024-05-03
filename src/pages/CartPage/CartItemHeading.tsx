import { CartItem } from "../../types";
import { Link } from "react-router-dom";

type CartItemHeadingProps = {
  item: CartItem;
};

function CartItemHeading({ item }: CartItemHeadingProps) {
  const { id, category, productName, productType } = item.product;

  return (
    <Link className="hover:text-blood" to={`/${category}/${id}`}>
      <h2 className="text-2xl font-semibold">
        {`"${productName}" `}
        <span className="whitespace-nowrap">{productType}</span>
      </h2>
    </Link>
  );
}

export default CartItemHeading;
