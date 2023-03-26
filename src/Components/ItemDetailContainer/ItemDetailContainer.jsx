import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";

import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const {addToCart, getQuantityById } = useContext(CartContext);

  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (quantity) => {
    let producto = {
      ...productSelected,
      quantity: quantity,
    };

    addToCart(producto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added successfully to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let quantity = getQuantityById(Number(id));

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      quantity={quantity}
    />
  );
};

export default ItemDetailContainer;
