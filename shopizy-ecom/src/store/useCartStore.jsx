import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    addToCart: (product) =>
        set((state) => {
            const updatedCart = [...state.cart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            console.log('updatedCart', updatedCart) ;
            return { cart: updatedCart };
           
        }),
    })) ;
    export default useCartStore;
        
