import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{
          marginLeft: "20%",
          marginTop: "5%",
          marginBottom: "20%",
          padding: 10,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography gutterBottom variant="h7" component="div" style={{marginLeft:"1%"}}>
            Complete with your personal information to finish the purchase:
          </Typography>
          <TextField
            type="text"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <TextField
            type="text"
            placeholder="Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />

          <TextField
            type="text"
            placeholder="Telephone"
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          />
          <Button variant="contained" type="submit" style={{marginTop:"15px"}}>
            Purchase
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default FormCheckout;
