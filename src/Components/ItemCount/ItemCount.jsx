import { Button } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container-btn">
      <h2>Cantidad: {counter}</h2>
      <div className="btns">
        <Button variant="outlined" onClick={add}>
          +
        </Button>
        <Button variant="contained" onClick={() => onAdd(counter)}>
          Add to cart
        </Button>
        <Button variant="outlined" onClick={decrease}>
          -
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
