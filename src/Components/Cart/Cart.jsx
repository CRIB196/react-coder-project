import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null)

  const clear = () => {
    Swal.fire({
      title: "Are you sure you want to empty your cart?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, empty cart",
      denyButtonText: "No, do not empty cart",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Cart succesfully empty", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cart stays the same way as before", "", "info");
      }
    });
  };

  if(orderId){
    return (
      <div>
        <h2>Thank you for your order</h2>
        <h4>The ticket is : {orderId}</h4>
        <Link to="/">Keep shopping</Link>
      </div>
    )
  }

  return (
    <div>
      {!showForm ? (
        <div className="cart-container">
          <div className="container-items">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt="" />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <h2>${item.price}.-</h2>
                    <h2>Units: {item.quantity}</h2>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => deleteProductById(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-info">
            <h3>Total: {getTotalPrice()}</h3>
            <h3>Discount: - </h3>
            <h3>Final Price: -</h3>

            {cart.length > 0 && (
              <div className="btn-cart">
                <Button variant="contained" onClick={()=>setShowForm(true)}>Terminar la compra</Button>
                <Button onClick={clear} variant="contained">
                 Empty cart
                </Button>
              </div>
            )}

            <h1>Total of the cart is ${getTotalPrice()}</h1>
          </div>
        </div>
      ) : (
        <FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart} />
      )}
    </div>
  );
};

export default Cart;