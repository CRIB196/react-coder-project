import React, { createContext, useState } from "react";
export const CartContext = createContext();

//children recibes the other components from app, and renders those by {children}

const CartContextProvider = ({children}) => {
const [cart, setCart]= useState([]);

const addToCart =(product) =>{
    setCart([...cart, product])
}

let data={
    cart: cart,
    setCard: setCart

}

  return <CartContext.Provider value={data}>
    {children}
  </CartContext.Provider>;
};

export default CartContextProvider;
