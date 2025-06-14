import { create } from "zustand";
/**
 * Custom hook for managing the shopping cart state.
 * It provides functions to add, update, remove items from the cart,
 * clear the cart, and check if a product is in the cart.
 * The cart state is persisted in localStorage for session persistence.
 */
const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      setTimeout(() => {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }, 0);
      return { cart: updatedCart };
    }),
  updateQuantity: (id, change) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  clearCart: () =>
    set(() => {
      localStorage.removeItem("cart");
      return { cart: [] };
    }),
  getTotalPrice: () => {
    const total = JSON.parse(localStorage.getItem("cart"))?.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total || 0;
  },
  isProductInCart: (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.some((item) => item.id === id);
  },
}));
export default useCartStore;
