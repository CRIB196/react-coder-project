import "./Footer.css";

const Footer = ({ children }) => {
  return (
    <div className="footer-container">
      {children}
      <h1>Swiss Clothing</h1>
    </div>
  );
};

export default Footer;
