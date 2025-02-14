import { FooterContainer, FooterText, FooterLinks } from "../styles/FooterStyles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Shopizy - All Rights Reserved</FooterText>
      <FooterLinks>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
