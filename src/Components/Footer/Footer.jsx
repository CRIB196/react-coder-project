import "./Footer.css";

const Footer = ({ children }) => {
  return (
    <div className="footer-container">
      {children}
      <h1>Next season - comming soon</h1>
    </div>
  );
};

export default Footer;
