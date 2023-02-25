import Footer from "./Components/Footer/Footer";
import ProductCard from "./Components/ProductCard/ProductCard";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
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
