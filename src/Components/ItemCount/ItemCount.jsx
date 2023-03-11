import { useState } from "react";

const ItemCount = ({ stock = 5, initial = 0, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h2>Amount of this item on cart: {counter}</h2>

      <button onClick={addOne}>Add one to cart</button>

      <button onClick={decrease}>Eliminate from cart</button>
    </div>
  );
};

export default ItemCount;
