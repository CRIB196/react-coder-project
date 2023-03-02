import { useState } from "react";

const ItemListContainer = ({ greeting }) => {
  
  const [user, setUser]= useState("");

  const updateName= () => {
    setUser(user);
  }


  return (
      <div>
          <h2>{greeting}+ {user} </h2>
      </div>
    );
  };
  
  export default ItemListContainer;