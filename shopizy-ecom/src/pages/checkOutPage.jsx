import {
  CheckoutContainer,
  CheckoutContent,
  Title,
  Message,
  BackButton,
  PurchasedItemsContainer,
  ItemList,
  Item,
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  PayButton,
} from "../styles/checkOutStyle";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const CheckoutPage = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];
  const { clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    paymentMethod: "credit-card",
  });
  const [isPaid, setIsPaid] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState(null);

  useEffect(() => {
    if (isPaid) {
      clearCart();
    }
  }, [isPaid, clearCart]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    const refNumber = Math.floor(100000 + Math.random() * 900000);
    setReferenceNumber(refNumber);
    setIsPaid(true);
  };

  return (
    <CheckoutContainer>
      {!isPaid ? (
        <>
          <CheckoutContent>
            {/* <Title>Checkout</Title> */}
            <FormContainer>
              <FormGroup>
                <h2>Shipping Details</h2>
                <Label htmlFor="fullName">FullName</Label>
                <Input
                  id="fullName"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Adress</Label>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <h3>Payment Method</h3>
                <Select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}>
                  <option value="credit-card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank-transfer">Bank Transfer</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <PayButton onClick={handlePayment}>Pay Now</PayButton>
              </FormGroup>
            </FormContainer>
          </CheckoutContent>
        </>
      ) : (
        <CheckoutContent>
          <Title> Congratulations!</Title>
          <Message>Your payment was successful!</Message>
          <Message>
            Reference Number: <strong>{referenceNumber}</strong>
          </Message>

          {cart.length > 0 && (
            <PurchasedItemsContainer>
              <h3>Purchased Items:</h3>
              <ItemList>
                {cart.map((item) => (
                  <Item key={item.id}>
                    <div>
                      <img src={item.image.url} alt={item.title} />
                      <span>{item.title}</span>
                    </div>
                    <span>
                      ${item.price} (Qty: {item.quantity})
                    </span>
                  </Item>
                ))}
              </ItemList>
            </PurchasedItemsContainer>
          )}

          <BackButton to="/">Back to Home</BackButton>
        </CheckoutContent>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutPage;
