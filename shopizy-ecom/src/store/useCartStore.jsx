import { create } from "zustand";

// const useCartStore = create((set) => ({
//     cart: JSON.parse(localStorage.getItem("cart")) || [],
//     addToCart: (product) =>
//         set((state) => {
//             const updatedCart = [...state.cart, product];
//             localStorage.setItem("cart", JSON.stringify(updatedCart));
//             console.log('updatedCart', updatedCart) ;
//             return { cart: updatedCart };
           
//         }),
//     })) ;
//     export default useCartStore;
        
const useCartStore = create((set) => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    addToCart: (product) =>
        set((state) => {
            const existingItem = state.cart.find((item) => item.id === product.id);
            let updatedCart;
            if (existingItem) {
                updatedCart = state.cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedCart = [...state.cart, { ...product, quantity: 1 }];
            }
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            console.log('udpatedCart', updatedCart);
            return { cart: updatedCart };
        }
    ),
    updateQuantity: (id, quantity) =>
        set((state) => {
            const updatedCart = state.cart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return { cart: updatedCart };
        }
    ),
    removeFromCart: (id) =>
        set((state) => {
            const updatedCart = state.cart.filter((item) => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return { cart: updatedCart };
        }
    ),
    clearCart: () =>
        set(() => {
            localStorage.removeItem("cart");
            return { cart: [] };
        }
    ),
    getTotalPrice: () => {
        const total = JSON.parse(localStorage.getItem("cart"))?.reduce(
            (sum, item) => sum + (item.price * item.quantity), 0
        );
        return total || 0; 
    },
    
}));
export default useCartStore;

