import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";

function App() {
  const onAdd = (cantidad) => {
    console.log("Se ejecuto onAdd " + cantidad);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1> error 404: Not found </h1>} />
        </Routes>

        <Footer />
      </BrowserRouter>

      {/* <Navbar />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      <ItemListContainer greeting={"Welcome to Swiss Cothing"} />
      <ProductCard title={"Mizzy Sweater"} price={20} />
      <ProductCard title={"Kendall Jean"} price={45} />
      <ProductCard title={"Hailey Pants"} price={70} />
      <ProductCard title={"Malibu T-shirt"} price={35} />
      <ProductCard title={"Selena One Sleeve"} price={20} />
      <Footer /> */}
    </div>
  );
}

export default App;
