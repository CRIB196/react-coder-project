import { BsFillCartCheckFill } from "react-icons/bs";

import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div
        className="container-cart"
        style={{
          fontSize: "2rem",
          color: "#e1d4c7",
          marginRight: "55px",
          marginLeft: "100px",
        }}
      >
        <BsFillCartCheckFill />
        <div className="bubble-counter"  style={{
          fontSize: "12px"}}>
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
