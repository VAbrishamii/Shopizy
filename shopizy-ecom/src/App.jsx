import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/checkOutPage";
import ContactPage from "./pages/ContactPage";
import WishlistPage from "./pages/WishListPage";
/**
 * 
 * @returns App component that defines the main routes of the application.
 * It uses React Router to set up the routing structure, including a layout component that wraps around the main content.
 * The routes include the home page, cart page, product details page, checkout page, contact page, and wishlist page.
 * The Layout component is used to provide a consistent header and footer across all pages.
 */
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Route>
    </Routes>
  );
}

export default App;
