import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      Cart
      <BsFillCartCheckFill color="yellow" size={50} />
    </div>
  );
};

export default CartWidget;
