import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
      <Typography variant="body2" color="text.secondary">
        Amount of this item on cart: {counter}
      </Typography>

      <Button size="small" onClick={addOne}>
        Add one to cart
      </Button>
      <Button size="small" onClick={decrease}>
        Eliminate from cart
      </Button>
    </div>
  );
};

export default ItemCount;
