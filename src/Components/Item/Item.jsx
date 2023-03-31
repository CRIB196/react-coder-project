import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 350,
        borderRadius: "10px",
        boxShadow: "0px 0px 10px black",
      }}
    >
      <CardMedia component="img" height="140" image={element.img} alt="" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="text.secondary"
        >
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Description:</b> {element.description} <br />
          <b>Price:</b> {element.price}.-
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
          <Button variant="contained">See details</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
