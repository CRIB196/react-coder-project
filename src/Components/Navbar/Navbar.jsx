import styles from "../Navbar/Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../Logo/MainLogo";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);

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
