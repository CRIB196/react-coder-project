import CartWidget from "../cartWidget/CartWidget";
import NavbarList from "../NavbarList/NavbarList";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <h1>Swiss Clothing</h1>
      <NavbarList />
      <CartWidget />
    </div>
  );
};

export default Navbar;
