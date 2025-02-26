import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CartSummaryContainer, CartItem, CartImage, CartDetails, CartActions, CheckoutButton } from "../styles/CartSummaryStyles";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const CartSummary = () => {
  const { cart, updateQuantity, removeFromCart } = useCartStore ();
  return (
    <DropdownMenu.Content asChild align="end" sideOffset={10}>
      <CartSummaryContainer>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <CartImage src={item.image.url} alt={item.title} />
                <CartDetails>
                  <p className="title">{item.title}</p>
                  <p className="price">${item.price.toFixed(2)}</p>
                  <CartActions>
                    <button onClick={() => updateQuantity(item.id, - 1)}>
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, + 1)}>
                      <Plus size={16} />
                    </button>
                    <button onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </CartActions>
                </CartDetails>
              </CartItem>
            ))}
            <CheckoutButton as={Link} to="/cart">Go to Cart</CheckoutButton>
            <CheckoutButton as={Link} to="/checkout">Checkout</CheckoutButton>
          </>
        )}
      </CartSummaryContainer>
    </DropdownMenu.Content>
  );
};

export default CartSummary;

