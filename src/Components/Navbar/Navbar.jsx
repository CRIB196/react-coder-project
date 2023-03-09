import styles from "../Navbar/Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import MainLogo from "../Logo/MainLogo";

const Navbar = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerNavbar}>
        <MainLogo/>
        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            All
          </Link>
          <Link to="/category/sneakers" className={styles.navbarItem}>
            Sneakers 
          </Link>
          <Link to="/category/hoddies" className={styles.navbarItem}>
            Hoddies
          </Link>
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
