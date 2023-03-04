import React from "react";
import { useState } from "react";

const ItemCount = ( stock, initial, onAdd) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    counter < stock ? setCounter(counter + 1) : setCounter(counter)
  };

  const restar = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(counter)
  };

  const productList


  return (
    <div>
      <h1>ItemCounter {counter}</h1>
      <button onClick={sumar}>Sum btn</button>
      <button onClick={restar}>Restar</button>
      <button onClick={() => onAdd(counter)}>Add to card</button>
 
    </div>
  );
};

export default ItemCount;
