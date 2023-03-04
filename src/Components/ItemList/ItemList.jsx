import React from "react";
import Item from "../Item/Item";

// nada de logica, todo el html se renderiza
//la primera etiqueta del elemento, debe tener el key (id)

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
