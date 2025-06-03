import { create } from "zustand";
/**
 * Custom hook for managing the shopping cart state.
 * It provides functions to toggle between light and dark themes,
 * and persists the theme selection in localStorage.
 * The default theme is set to "light" if no preference is found in localStorage.
 */
const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "light",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));

export default useThemeStore;
