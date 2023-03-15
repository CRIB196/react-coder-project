import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    <div>
      <Typography variant="body2" color="text.secondary">
        Item quantity: {counter}
      </Typography>

      <Button size="small" onClick={add}>
        Add
      </Button>
      <Button size="small" onClick={decrease}>
        Eliminate
      </Button>
      <Button size="small" onClick={() => onAdd(counter)}>
        Add to cart
      </Button>
    </div>
  );
};

export default ItemCount;
