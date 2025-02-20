import { useState, useEffect } from "react";
import { Home, User, Headset } from "lucide-react";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useThemeStore from "../store/useThemeStore";
import {
  HeaderContainer,
  TopHeader,
  Logo,
  NavLinks,
  IconLink,
  CartBadge,
  ThemeToggle,
  ToggleSwitch,
  ToggleSlider,
  MobileNav,
} from "../styles/HeaderStyles";
import logo from "../assets/logo.jpg";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const {cart } = useCartStore();



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
          <ToggleSwitch isDark={theme === "dark"}>
            <ToggleSlider isDark={theme === "dark"} />
            </ToggleSwitch>
        </ThemeToggle>
      </TopHeader>

      {/* Navbar changes based on screen size */}
      {isMobile ? (
        <MobileNav>
          <Link to="/">
            <Home size={24} />
          </Link>
          <Link to="/support">
            <Headset size={24} />
          </Link>
          <Link to="/cart">
            <ShoppingBagIcon className="cart-icon" width={28} height={28} />
            {cart.length > 0 && <CartBadge>{cart.length}</CartBadge>}
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
            <ShoppingBagIcon  width={28} height={28} />
            {cart.length > 0 && <CartBadge>{cart.length}</CartBadge>}
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
