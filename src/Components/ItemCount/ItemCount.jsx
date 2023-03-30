import { Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";
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
    <div className="container-btn">
      <Typography gutterBottom variant="h5" component="div">
        Quantity: {counter}
      </Typography>
      <div className="btns">
        <CardActions>
          <Button variant="outlined" onClick={add}>
            +
          </Button>
          <Button variant="contained" onClick={() => onAdd(counter)}>
            Add to cart
          </Button>
          <Button variant="outlined" onClick={decrease}>
            -
          </Button>
        </CardActions>
      </div>
    </div>
  );
};

export default ItemCount;
