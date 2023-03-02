import "./ProductCard.css";

const ProductCard = (props) => {
  let { title, price } = props;

  const buy= () => {

    console.log("Funcion directa cuando no recibe parametros");

  }
 

  return (
    <div className="card custom-card" style={{ width: "300px" }}>
      <img
        src="https://reactjs.org/logo-og.png"
        className="card-img-top"
        alt="..."
      />
      <h5 className="card-title">{title}</h5>
      <p className="card-text">UDS {price}</p>
      <button onClick={buy}> Buy </button>
    </div>
  );
};

export default ProductCard;
