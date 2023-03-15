import * as React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { products } from "../../productMock";
import ItemCount from "../ItemCount/ItemCount";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (quantity) => {
    let product = {
      ...productSelected,
      quantity: quantity,
    };

    addToCart(product);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        margin: "30px",
        marginLeft: 500,
        marginBottom: 100,
        marginTop: 100,
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={productSelected.img}
        title="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productSelected.title}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={productSelected.stock} onAdd={onAdd} />
      </CardActions>
    </Card>
  );
};

export default ItemDetailContainer;
