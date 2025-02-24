import useCartStore from "../store/useCartStore";
import { CartContainer, CartItem, CartDetails, CartTotal, RemoveButton, QuantityInput } from "../styles/CartStyles";

const CartPage = () => {
    const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCartStore();

    return (
        <CartContainer>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            cart.map((item, index) => (
                <CartItem key={`${item.id}-${index}`}> {/* ✅ Unique key */}
                    <img src={item.image?.url} alt={item.title} />
                    <CartDetails>
                        <h3>{item.title}</h3>
                        <p>${item.price ? item.price.toFixed(2) : "N/A"}</p> {/* ✅ Prevent errors */}
                        <QuantityInput
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                        />
                        <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
                    </CartDetails>
                </CartItem>
            ))
        )}
        {cart.length > 0 && (
            <CartTotal>
                <h3>Total: ${Number(getTotalPrice()).toFixed(2)}</h3> {/* ✅ Ensures numeric value */}
            </CartTotal>
        )}
    </CartContainer>
);
};

export default CartPage;
       
