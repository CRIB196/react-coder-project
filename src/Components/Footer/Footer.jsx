import "./Footer.css";

const Footer = ({ children }) => {
  return (
    <div className="footer-container">
      {children}
      <h1> Our collection: Winter 2023</h1>
      <p>Copyright &copy; 2023</p>
    </div>
  );
};

export default Footer;
