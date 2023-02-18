import React from "react";

const ProductCard = (props) => {

    let {title, price}= props


  return (
    <div>
      <h2>{title}</h2>
      <p>On sale! {price}</p>
    </div>
  );
};

export default ProductCard;
