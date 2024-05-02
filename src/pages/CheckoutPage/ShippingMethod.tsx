import { SHIPPING_OPTIONS } from "../../constants";
import { ShippingOption } from "../../types";

type ShippingMethodProps = {
  shippingMethod: ShippingOption;
  setShippingMethod: React.Dispatch<React.SetStateAction<ShippingOption>>;
};

function ShippingMethod({
  shippingMethod,
  setShippingMethod,
}: ShippingMethodProps) {
  return (
    <div>
      <h2 className="mb-3 font-semibold uppercase">Shipping Method</h2>
      <fieldset>
        {SHIPPING_OPTIONS.map((option) => {
          return (
            <label
              htmlFor={option.name}
              className="w-full flex justify-between p-3 hover:cursor-pointer"
            >
              <div>
                <input
                  onChange={() => setShippingMethod(option)}
                  type="radio"
                  name={"shipping-method"}
                  id={option.name}
                  value={shippingMethod.name}
                  className="mr-2 hover:cursor-pointer"
                  checked={option.name === shippingMethod.name}
                />
                {option.name} - {option.days} days
              </div>
              <span>${option.cost}</span>
            </label>
          );
        })}
      </fieldset>
    </div>
  );
}

export default ShippingMethod;
