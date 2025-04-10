import PriceDisplay from "../components/PriceDisplay";
import useCartStore from "../store/useCartStore";
import {
  CartContainer,
  CartItem,
  CartDetails,
  SummaryContainer,
  RemoveButton,
  CartActions,
  QuantityWrapeper,
  CheckoutButton,
} from "../styles/CartStyles";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProductDescription, ProductTitle } from "../styles/CardStyles";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } =
    useCartStore();
  const subtotal = getTotalPrice();
  const Shipping = 0;
  const total = subtotal + Shipping;

  const navigate = useNavigate();
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    navigate("/checkout", { state: { cart } });
    clearCart();
  };

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <CartItem key={`${item.id}-${index}`}>
            <img src={item.image?.url} alt={item.title} />
            <CartDetails>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductDescription>{item.description}</ProductDescription>
              <PriceDisplay
                price={item.price}
                discountedPrice={item.discountedPrice}
              />
              {/* ✅ Prevent errors */}
            </CartDetails>
            <CartActions>
              <QuantityWrapeper>
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  aria-label="Decrease quantity">
                  <Minus sizze={18} />
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, +1)}
                  aria-label="Increase quantity">
                  <Plus size={18} />
                </button>
              </QuantityWrapeper>

              <RemoveButton
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove item">
                <Trash2 size={18} />
              </RemoveButton>
            </CartActions>
          </CartItem>
        ))
      )}
      {cart.length > 0 && (
        <SummaryContainer>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>FREE</span>
          </div>
          <hr />
          <div className="summary-row total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <CheckoutButton onClick={handleCheckout}> Checkout</CheckoutButton>
        </SummaryContainer>
      )}
    </CartContainer>
  );
};

export default CartPage;
