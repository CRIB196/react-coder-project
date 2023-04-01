import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Form from "./Components/Form/Form";
import CartContextProvider from "./context/CartContext";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="body-classname">
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
            <Route path="/form" element={<Form />} />

            <Route
              path="*"
              element={
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="text.secondary"
                  style={{
                    marginTop:"2%",
                    marginLeft:"2%",
                  }}
                >
                  error 404: Not found  <br/> Please if your are searching for an item, this is not an existing current id. 
                </Typography>
              }
            />
          </Routes>
        </div>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
