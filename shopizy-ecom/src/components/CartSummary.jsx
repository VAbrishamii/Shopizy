import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckoutButton, CartSummaryContainer } from "../styles/CartSummaryStyles";

const CartSummary = ({ cart, updateQuantity, removeFromCart }) => {
  return (
    <DropdownMenu.Content asChild>
      <CartSummaryContainer className="cart-summary">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image.url} alt={item.title} />
              <div className="cart-details">
                <p>{item.title}</p>
                <p>${item.price.toFixed(2)}</p>
                <div className="cart-actions">
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
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
          ))
        )}
        
        <CheckoutButton to="/cart">Go to Cart</CheckoutButton>
        <CheckoutButton to="/checkout">Checkout</CheckoutButton>
      </CartSummaryContainer>
    </DropdownMenu.Content>
  );
};

export default CartSummary;
