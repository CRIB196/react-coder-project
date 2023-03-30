import * as React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={productSelected.img}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productSelected.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Description:</b> {productSelected.description} <br />
              <b>Price:</b> {productSelected.price}.-
            </Typography>
          </CardContent>
        </CardActionArea>

        <ItemCount
          onAdd={onAdd}
          stock={productSelected.stock}
          initial={quantity}
        />
      </Card>
    </div>
  );
};

export default ItemDetail;
