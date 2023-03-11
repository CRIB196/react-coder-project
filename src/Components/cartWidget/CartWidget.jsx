import React, { useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const elements = useContext(CartContext);

  return (
    <Link to="/cart">
      <div style={{ margin: "50px" }}>
        <BsFillCartCheckFill color="white" size={50} />
        <div className="bubble-counter" style={{ color: "white" }}>
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
