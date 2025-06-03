import {
  FooterContainer,
  FooterText,
  FooterLinks,
} from "../styles/FooterStyles";
import { Link } from "react-router-dom";
/**
 * Footer component that displays the footer section of the website
 * It includes copyright information and links to the home and contact pages.
 */
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Shopizy - All Rights Reserved
      </FooterText>
      <FooterLinks>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
