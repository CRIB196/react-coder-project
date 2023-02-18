import Footer from "./Components.js/Footer/Footer";
import Navbar from "./Components.js/Navbar/Navbar";
import ProductCard from "./Components.js/ProductCard/ProductCard";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Footer /> */}
      <ProductCard title={"bike"} price={20}/>
      <ProductCard title={"sunglasses"} price={20}/>
      <ProductCard title={"bottle"} price={20}/>
    </div>
  );
}

export default App;
