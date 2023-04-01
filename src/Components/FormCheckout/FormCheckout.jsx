import React, { useState } from "react";
import { Box, TextField, Button, Typography, Card } from "@mui/material";

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    firstemail: "",
    email: "",
    phone: "",
  });

  console.log(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      date: Date().toLocaleString(),
      state: "Successful purchase",
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
      <Card
        sx={{ maxWidth: 500 }}
        style={{
          marginLeft: "35%",
          marginTop: "8%",
          padding: 40,
          backgroundColor: "#e1d4c7",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Fill the form data to finish purchase:
        </Typography>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={userData.lastname}
            onChange={(e) =>
              setUserData({ ...userData, lastname: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Email"
            value={userData.firstemail}
            onChange={(e) =>
              setUserData({ ...userData, firstemail: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Repeat your email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Cellphone"
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          />

          <button type="submit">Confirm Purchase</button>
        </form>
      </Card>
    </div>
  );
};

export default FormCheckout;
