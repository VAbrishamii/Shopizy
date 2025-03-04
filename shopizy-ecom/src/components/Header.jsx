import { useState, useRef } from "react";
import { Home, User, Headset } from "lucide-react";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useThemeStore from "../store/useThemeStore";
import useCartStore from "../store/useCartStore";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
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
import CartSummary from "./CartSummary";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
// import ProductCard from "./ProductCard";


const Header = ({cartIconRef}) => {

  const { theme, toggleTheme } = useThemeStore();
  const {cart, updateQuantity, removeFromCart } = useCartStore();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // const cartIconRef = useRef(null);

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

      {/* Mobile Navigation */}
      {isMobile ? (
        <MobileNav>
          <Link to="/">
            <Home size={24} />
          </Link>
          <Link to="/contact">
            <Headset size={24} />
          </Link>

          <Link to="/cart">
            <CartWrapper ref={cartIconRef}>
              <ShoppingBagIcon width={28} height={28} />
              {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
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
          <IconLink to="/contact">
            <Headset size={24} />
          </IconLink>
          
          <DropdownMenu.Root open={isCartOpen} onOpenChange={setIsCartOpen}>
            <DropdownMenu.Trigger asChild>
              <CartWrapper ref={cartIconRef}>
                <ShoppingBagIcon width={28} height={28} />
                {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
              </CartWrapper >
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <CartSummary
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <IconLink to="/account">
            <User size={24} />
          </IconLink>
        </NavLinks>
      )}
       
        {/* <ProductCard cartIconRef={cartIconRef} /> */}
    </HeaderContainer>
  );
};

export default Header;
