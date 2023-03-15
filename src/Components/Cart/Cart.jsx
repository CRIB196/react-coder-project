import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const { cart } = useContext(CartContext);

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
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
