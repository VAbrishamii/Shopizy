import { useState } from "react";
import { Home, Headset, Heart } from "lucide-react";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useThemeStore from "../store/useThemeStore";
import useCartStore from "../store/useCartStore";
import useWishlistStore from "../store/useWishlistStore";
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



const Header = ({cartIconRef}) => {

  const { theme, toggleTheme } = useThemeStore();
  const {cart, updateQuantity, removeFromCart } = useCartStore();
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;

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

           {/* <CartWrapper onClick={() => setIsWishlistOpen(!isWishlistOpen)}>
            <Heart size={24} />
            {wishlistCount > 0 && <CartBadge>{wishlistCount}</CartBadge>}
          </CartWrapper>
          {isWishlistOpen && (
            <WishlistSummary removeFromWishlist={removeFromWishlist} />
          )} */}
           <Link to="/wishlist">
            <CartWrapper>
              <Heart size={24} />
              {wishlistCount > 0 && <CartBadge>{wishlistCount}</CartBadge>}
            </CartWrapper>
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
          
          {/* <DropdownMenu.Root open={isCartOpen} onOpenChange={setIsCartOpen}> */}
          <DropdownMenu.Root>
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
{/* 
         {/* Wishlist Dropdown */}
        
          {/* <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <CartWrapper>
                <Heart size={24} />
                {wishlistCount > 0 && <CartBadge>{wishlistCount}</CartBadge>}
              </CartWrapper>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content>
              <WishlistSummary removeFromWishlist={removeFromWishlist} />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root> */}
          <Link to="/wishlist">
            <CartWrapper>
              <Heart size={24} />
              {wishlistCount > 0 && <CartBadge>{wishlistCount}</CartBadge>}
            </CartWrapper>
          </Link>
        </NavLinks>
      )}
   
    </HeaderContainer>
  );
};

export default Header;
