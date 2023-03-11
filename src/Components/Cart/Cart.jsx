import React, { useContext } from "react";

const Cart = () => {
 const {cart } =useContext (CartContext)
  return (
    <div>
      <h1>Shopping cart</h1>
      cart.map((element) => {
        return <div>
          <h2>{element.title}</h2>
          <h3>{element.price}</h3>
        </div>
      })
    </div>
  );
};

export default Cart;
