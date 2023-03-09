import myLogo from "../Logo/swissclothinglogo.png"
const MainLogo = () => {
  return (
    <div className="logo-container">
      <img
        style={{ width: "200px", margin: "40px" }}
        src={myLogo}
        alt=""
      />
    </div>
  );
};

export default MainLogo;
