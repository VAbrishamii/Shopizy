import { create } from "zustand";
/**
 * Custom hook for managing the shopping cart state.
 * It provides functions to toggle between light and dark themes,
 * and persists the theme selection in localStorage.
 * The default theme is set to "light" if no preference is found in localStorage.
 */
const useWishlistStore = create((set) => ({
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  addToWishlist: (product) =>
    set((state) => {
      const existingItem = state.wishlist.find(
        (item) => item.id === product.id
      );
      if (existingItem) return state; // Prevent duplicate wishlist items

      const updatedWishlist = [...state.wishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return { wishlist: updatedWishlist };
    }),
  removeFromWishlist: (id) =>
    set((state) => {
      const updatedWishlist = state.wishlist.filter((item) => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return { wishlist: updatedWishlist };
    }),
  clearWishlist: () =>
    set(() => {
      localStorage.removeItem("wishlist");
      return { wishlist: [] };
    }),
  isProductInWishlist: (id) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return wishlist.some((item) => item.id === id);
  },
}));

export default useWishlistStore;
