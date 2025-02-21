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
  CartWrapper,
  CartBadge,
  ThemeToggle,
  ToggleSwitch,
  ToggleSlider,
  MobileNav,
} from "../styles/HeaderStyles";
import logo from "../assets/logo.jpg";
import useCartStore from "../store/useCartStore";
import { useMediaQuery } from "react-responsive";




const Header = () => {

  const { theme, toggleTheme } = useThemeStore();
  const {cart } = useCartStore();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });



  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

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
         <CartWrapper>
            <ShoppingBagIcon className="cart-icon" width={28} height={28} />
            {cart.length > 0 && <CartBadge isMobile={isMobile} isTablet={isTablet}>{cart.length}</CartBadge>}
          </CartWrapper>
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
          <CartWrapper>
            <ShoppingBagIcon  width={28} height={28} />
            {cart.length > 0 && <CartBadge isMobile={isMobile} isTablet={isTablet}>{cart.length}</CartBadge>}
          </CartWrapper>
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
