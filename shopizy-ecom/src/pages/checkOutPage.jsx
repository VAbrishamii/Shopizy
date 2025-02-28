
import { CheckoutContainer, CheckoutContent, Title, Message, BackButton, PurchasedItemsContainer, ItemList, Item } from "../styles/checkOutStyle";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const CheckoutPage = () => {
  const location = useLocation();
  const cart = location.state?.cart || []; 
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart(); 
  }, []);

  return (
    <CheckoutContainer>
    <CheckoutContent>
      <Title>🎉 Congratulations! 🎉</Title>
      <Message>You successfully completed your purchase!</Message>
      {cart.length > 0 && (
        
        <PurchasedItemsContainer>
            <h3>Purchased Items:</h3>
            <ItemList>
              {cart.map((item) => (
                <Item key={item.id}>
                  <div>
                  <img src={item.image.url} alt={item.title.url}  />
                  <span>{item.title}</span>
                  </div>
                  <span>${item.price} (Qty: {item.quantity})</span>
                </Item>
              ))}
            </ItemList>
          </PurchasedItemsContainer>
        )}
    </CheckoutContent>
    <BackButton to="/">Back to Home</BackButton>
  </CheckoutContainer>
  );
};

export default CheckoutPage;


