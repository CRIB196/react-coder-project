import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import MainLogo from "../Logo/MainLogo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [categories, setCategories] = useState([]);

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
      const firstCat =
        categoryList.length > 0 && categoryList.find((e) => e.title === "All");
      const otherCat =
        categoryList.length > 0 &&
        categoryList.filter((e) => e.title !== "All");
      if (categoryList.length > 0) {
        setCategories([firstCat, ...otherCat]);
      }
    });
  }, [categoryList]);

  return (
    <div>
      <div className={styles.containerNavbar}>
        <MainLogo />
        <ul className={styles.containerList}>
          {categories?.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
                style={{
                  color: "#e1d4c7",
                  marginRight: "40px",
                  marginLeft: "50px",
                }}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
