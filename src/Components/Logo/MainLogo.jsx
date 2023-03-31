import { Link } from "react-router-dom";
import myLogo from "../Logo/swissclothinglogo.png";
const MainLogo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img
          src={myLogo}
          style={{ width: "200px", marginLeft: "50px" }}
          alt="Logo"
        ></img>
      </Link>
    </div>
  );
};

export default MainLogo;
