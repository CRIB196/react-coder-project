import React from "react";
import Item from "../Item/Item";

// nada de logica, todo el html se renderiza
//la primera etiqueta del elemento, debe tener el key (id)

const ItemList = ( {items} ) => {
  return (
    <div style={ {
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "40px",
        padding: "20px 0",
        margin: "20px"
    } } >
        
        {
            items.map( (element)=>{
                return <Item key={element.id} element={element}  />
            } )
        }

    </div>
  )
}

export default ItemList