import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  return (
    <div>
      <h2>Here is your current cart {counter}</h2>

      <button onClick={() => onAdd(counter)}>Add to cart</button>
    </div>
  );
};

export default ItemCount;
