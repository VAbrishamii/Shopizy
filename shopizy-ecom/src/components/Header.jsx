import { useState, useEffect } from "react";
import { Home, ShoppingCart, User, Headset, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import useThemeStore from "../store/useThemeStore";
import {
  HeaderContainer,
  TopHeader,
  Logo,
  NavLinks,
  IconLink,
  ThemeToggle,
  MobileNav,
} from "../styles/HeaderStyles";
import logo from "../assets/logo.jpg";

const Header = () => {
  const { toggleTheme } = useThemeStore();
  const theme = useTheme();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <TopHeader>
        <Link to="/">
          <Logo src={logo} alt="Shopizy" />
        </Link>
        {/* Dark Mode Toggle */}
        <ThemeToggle onClick={toggleTheme} title="Toggle Theme">
          {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </ThemeToggle>
      </TopHeader>

      {/* ✅ Navbar changes based on screen size */}
      {isMobile ? (
        <MobileNav>
          <Link to="/">
            <Home size={24} />
          </Link>
          <Link to="/support">
            <Headset size={24} />
          </Link>
          <Link to="/cart">
            <ShoppingCart size={24} />
          </Link>
          <Link to="/account">
            <User size={24} />
          </Link>
        </MobileNav>
      ) : (
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
        </NavLinks>
      )}
    </HeaderContainer>
  );
};

export default Header;
