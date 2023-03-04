import { useState, useEffect } from "react";
import ItemList from "../../ItemList/ItemList";
import { products } from "../../productMock";


const ItemListContainer = ({ greeting }) => {
  
  const [user, setUser]= useState("");
  const [items, setItems]= useState([]);

  useEffect(() => {
    const productList= new Promise ((resolve, reject)=> {
      resolve( products )
    })

    productList
      .then ((res) => { setItems(res)})
      .catch ((error) => {console.log(error)})
  
  },[]);
  
 
  const updateName= () => {
    setUser("mariauser");
  }

  

  return (
      <div>
         <ItemList items={items} />
      </div>
    );
  };
  
  export default ItemListContainer;