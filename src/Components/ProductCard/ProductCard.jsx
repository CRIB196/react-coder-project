import "./ProductCard.css";

const ProductCard = (props) => {
  let { title, price } = props;

  return (
    <div className="card custom-card" style={{ width: "300px" }}>
      <img
        src="https://reactjs.org/logo-og.png"
        className="card-img-top"
        alt="..."
      />
      <h5 className="card-title">{title}</h5>
      <p className="card-text">UDS {price}</p>
    </div>
  );
};

export default ProductCard;
