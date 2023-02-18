import CartWidget from "../cartWidget/CartWidget";
import NavbarList from "../NavbarList/NavbarList";
import "./Navbar.css";


const Navbar = () => {

let nombre= "Camila";


  return (
    
    <div className="container-navbar">
      <h1>Hola navbar</h1>
      <h2>{nombre}</h2>
      <NavbarList />
      <CartWidget />
    </div>
  );
};

export default Navbar;
