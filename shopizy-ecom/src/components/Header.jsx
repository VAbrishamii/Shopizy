import { Home, ShoppingCart, User, Headset, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import  useThemeStore  from "../store/useThemeStore";
import {
  HeaderContainer,
  Logo,
  NavLinks,
  IconLink,
  ThemeToggle,
} from "../styles/HeaderStyles";
import logo from "../assets/logo.jpg";

const Header = () => {
  const { toggleTheme } = useThemeStore();
  const theme = useTheme();
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} alt="Shopizy" />
      </Link>
      <NavLinks>
        <IconLink to="/">
          <Home size={24} />
        </IconLink>
        <IconLink to="/support">
          <Headset size={24} />
        </IconLink>
        <IconLink to="/cart">
          <ShoppingCart size={24} />
        </IconLink>
        <IconLink to="/account">
          <User size={24} />
        </IconLink>
          {/* Dark Mode Toggle */}
        <ThemeToggle onClick={toggleTheme} title="Toggle Theme">
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />} 
        </ThemeToggle>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
