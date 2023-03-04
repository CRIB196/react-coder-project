import Footer from "./Components/Footer/Footer";
import ProductCard from "./Components/ProductCard/ProductCard";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {

const onAdd =( cantidad ) =>{
  console.log("Se ejecuto onAdd "+ cantidad);
}

let stock=5;
let initial=1;
|

  return (
    <div>
      <Navbar />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      <ItemListContainer greeting={"Welcome to Swiss Cothing"} />
      <ProductCard title={"Mizzy Sweater"} price={20} />
      <ProductCard title={"Kendall Jean"} price={45} />
      <ProductCard title={"Hailey Pants"} price={70} />
      <ProductCard title={"Malibu T-shirt"} price={35} />
      <ProductCard title={"Selena One Sleeve"} price={20} />
      <Footer />
    </div>
  );
}

export default App;
