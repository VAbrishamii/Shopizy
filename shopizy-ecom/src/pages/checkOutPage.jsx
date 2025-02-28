
// import { CheckoutContainer, Message, BackButton,  } from "../styles/checkOutStyle";

// const CheckOutPage = () => {
//     return (
//         <CheckoutContainer>
//         <Message>You successfully completed your purchase!</Message>
//         <BackButton to="/">Back to Home</BackButton>
//         </CheckoutContainer>
//     );
//     }
//     export default CheckOutPage;


import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckoutContainer, Message, BackButton } from "../styles/CheckoutStyle";
import useCartStore from "../store/useCartStore";

const CheckoutPage = () => {
  const location = useLocation();
  const cart = location.state?.cart || []; // ✅ Retrieve cart data from state
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart(); // ✅ Clear cart AFTER user arrives at checkout
  }, []);

  return (
    <CheckoutContainer>
      <Message> You successfully completed your purchase! </Message>
      {cart.length > 0 && (
        <div>
          <h3>Purchased Items:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.title} - ${item.price} (Qyt{item.quantity})</li>
            ))}
          </ul>
        </div>
      )}
      <BackButton to="/">Back to Home</BackButton>
    </CheckoutContainer>
  );
};

export default CheckoutPage;


