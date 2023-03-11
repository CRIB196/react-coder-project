import React, { createContext } from "react";

export const CartContext = createContext();

//children recibes the other components from app, and renders those by {children}

const CartContextProvider = ({children}) => {
  return <CartContext.Provider>
    {children}
  </CartContext.Provider>;
};

export default CartContextProvider;
