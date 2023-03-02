import React from "react";
import { useState } from "react";

const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(counter)
  };

  const sethun = () => {
    setCounter(100);
  };

  return (
    <div>
      <h1>ItemCounter {counter}</h1>
      <button onClick={sumar}>Sum btn</button>
      <button onClick={restar}>Restar</button>
      <button onClick={sethun}>SetHun</button>
    </div>
  );
};

export default ItemCount;
