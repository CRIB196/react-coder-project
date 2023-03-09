import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div style={{ margin: "50px" }}>
      <BsFillCartCheckFill color="blue" size={50} />
    </div>
  );
};

export default CartWidget;
