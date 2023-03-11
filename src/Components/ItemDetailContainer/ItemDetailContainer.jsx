import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const selectedProducts = products.find(
    (element) => element.id === Number(id)
  );

  const onAdd = (quantity) => {
    console.log(`${quantity} products were added to the cart.`);
  
  };

  return (
    <div>
      <h1>{selectedProducts.title}</h1>
      <img src={selectedProducts.img} alt="" />
      <ItemCount stock={selectedProducts.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
