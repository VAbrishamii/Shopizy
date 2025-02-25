import { useState, useRef } from "react";
import { Home, User, Headset, Minus, Plus, Trash2 } from "lucide-react";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useThemeStore from "../store/useThemeStore";
import useCartStore from "../store/useCartStore";
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
  CartSummary,
  CheckoutButton,

} from "../styles/HeaderStyles";
import logo from "../assets/logo.jpg";
import { useMediaQuery } from "react-responsive";




const Header = () => {

  const { theme, toggleTheme } = useThemeStore();
  const {cart, updateQuantity, removeFromCart, getTotalPrice } = useCartStore();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsCartOpen(false);
    }
  };

  // Ensure cart stays open while interacting
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsCartOpen(true);
    }
  };

  const handleMouseLeave = (e) => {
    if (!isMobile && (!e.relatedTarget || !e.relatedTarget.closest(".cart-summary"))) {
      setIsCartOpen(false);
    }
  };


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

      <NavLinks>
        <IconLink to="/">
          <Home size={24} />
        </IconLink>
        <IconLink to="/support">
          <Headset size={24} />
        </IconLink>

        {/* Cart Wrapper (Works for Desktop & Mobile) */}
        <CartWrapper
          ref={cartRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => isMobile && setIsCartOpen(!isCartOpen)} // Toggle for mobile
        >
          <ShoppingBagIcon width={28} height={28} />
          {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}

          {/* Cart Summary */}
          {isCartOpen && cart.length > 0 && (
            <CartSummary className="cart-summary">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image.url} alt={item.title} />
                  <div className="cart-details">
                    <p>{item.title}</p>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="cart-actions">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus size={18} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus size={18} />
                      </button>
                      <button onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <CheckoutButton to="/cart">Go to Cart</CheckoutButton>
              <CheckoutButton to="/checkout">Checkout</CheckoutButton>
            </CartSummary>
          )}
        </CartWrapper>


      {/* Navbar changes based on screen size
      {isMobile ? (
        <MobileNav>
          <Link to="/">
            <Home size={24} />
          </Link>
          <Link to="/support">
            <Headset size={24} />
          </Link>
          <CartWrapper
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={(e) => {
              if (!e.relatedTarget || !e.relatedTarget.closest(".cart-summary")) {
                setIsCartOpen(false);
              }
            }}
            >

            <ShoppingBagIcon className="cart-icon" width={28} height={28} />
            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
            {isCartOpen && cart.length > 0 && (
               <CartSummary
               className="cart-summary"
               onMouseEnter={() => setIsCartOpen(true)}
               onMouseLeave={() => setIsCartOpen(false)}
             >
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image.url} alt={item.title} />
                    <div className="cart-details">
                      <p>{item.title}</p>
                      <p>${item.price.toFixed(2)}</p>
                      <div className="cart-actions">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus size={18} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus size={18} />
                        </button>
                        <button onClick={() => removeFromCart(item.id)}><Trash2/></button>
                      </div>
                    </div>
                  </div>
                ))}
                <Link to="/cart">Go to Cart</Link>
                <Link to="/checkout">Checkout</Link>
              </CartSummary>
            )}
          </CartWrapper>
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
          <CartWrapper
            onMouseEnter={() => setIsCartOpen(true)}
             onMouseLeave={(e) => {
              if (!e.relatedTarget || !e.relatedTarget.closest(".cart-summary")) {
                setIsCartOpen(false);
              }
            }}
          >
            <ShoppingBagIcon width={28} height={28} />
            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
            {isCartOpen && cart.length > 0 && (
               <CartSummary
               className="cart-summary"
               onMouseEnter={() => setIsCartOpen(true)}
               onMouseLeave={() => setIsCartOpen(false)}
             >
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image.url} alt={item.title} />
                    <div className="cart-details">
                      <p>{item.title}</p>
                      <p>${item.price.toFixed(2)}</p>
                      <div className="cart-actions">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                        <button onClick={() => removeFromCart(item.id)}>🗑</button>
                      </div>
                    </div>
                  </div>
                ))}
                <Link to="/cart">Go to Cart</Link>
                <Link to="/checkout">Checkout</Link>
              </CartSummary>
            )}
          </CartWrapper> */}
          
          <IconLink to="/account">
            <User size={24} />
          </IconLink>
        </NavLinks>
  
    </HeaderContainer>
  );
};

export default Header;
