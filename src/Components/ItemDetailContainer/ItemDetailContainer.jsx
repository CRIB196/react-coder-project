import * as React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productMock";
import ItemCount from "../ItemCount/ItemCount";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const selectedProducts = products.find(
    (element) => element.id === Number(id)
  );

  const onAdd = (quantity) => {
    console.log(`${quantity} products were added to the cart.`);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "30px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={selectedProducts.img}
        title="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {selectedProducts.title}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={selectedProducts.stock} onAdd={onAdd} />
      </CardActions>
    </Card>
  );
};

export default ItemDetailContainer;
