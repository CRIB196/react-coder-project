import CartWidget from "../cartWidget/CartWidget";
import NavbarList from "../NavbarList/NavbarList";
import MainLogo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <h1>Swiss Clothing</h1>
      <NavbarList />
      <MainLogo />
      <CartWidget />
    </div>
  );
};

export default Navbar;
