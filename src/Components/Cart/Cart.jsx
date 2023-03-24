import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const clear = () => {
    Swal.fire({
      title: "Are you sure you want to empty cart?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, empty cart",
      denyButtonText: `No, do not empty cart`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Cart succesfully empty", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cart stays the same way as before", "", "info");
      }
    });
  };

 return (
   <div>
      <Typography gutterBottom variant="h5" component="div">
        Shopping cart
      </Typography>
      {cart.map((element) => {
        return (
          <div>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {element.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Total amount ${element.price}.00 UDS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Total units {element.quantity}
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={element.img}
                alt="Live from space album cover"
              />
            </Card>
            <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteProductById(element.id)}
                >
                  Delete
                </Button>
              
               <div className="cart-info">
        <h3>Total price: {getTotalPrice()}</h3>
        <h3>Discount: - </h3>
        <h3>Final Price: -</h3>

        {cart.length > 0 && (
          <div className="btn-cart">
            <Button variant="contained">Comprar</Button>
            <Button onClick={clear} variant="contained">
              Empty Cart
            </Button>
          </div>
        )}

        <h1>Total of Cart ${getTotalPrice()}</h1>
      </div>
          </div>
          
        );
      })}
    </div>
  );
};

export default Cart;
