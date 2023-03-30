import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

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

  if (orderId) {
    return (
      <div>
        <h2>Thank you for your order</h2>
        <h4>The ticket is : {orderId}</h4>
        <Link to="/">Keep shopping</Link>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div className="cart-container">
          <Card sx={{ maxWidth: 345 }}>
            <div className="container-items">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="cart-item">
                    <CardMedia
                      component="img"
                      alt=""
                      height="140"
                      image={item.img}
                    />
                    <div className="cart-item-info">
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          ${item.price}.-
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          Units: {item.quantity}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => deleteProductById(item.id)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          <div style={{ margin: "25%" }}>
            <Card sx={{ maxWidth: 600 }} variant="outlined">
              <CardContent>
                <Typography variant="body1">
                  Total: {getTotalPrice()}
                </Typography>
                <Typography variant="body1">Discount: -</Typography>
                <Typography variant="body1">Final Price: -</Typography>

                {cart.length > 0 && (
                    <CardActions>
                      <Button
                        variant="contained"
                        onClick={() => setShowForm(true)}
                      >
                        Finish your purchase
                      </Button>
                      <Button onClick={clear} variant="contained">
                        Empty cart
                      </Button>
                    </CardActions>         
                )}
                <Typography variant="h4" component="div">
                  Total of the cart is ${getTotalPrice()}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
