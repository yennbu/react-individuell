// hooks/useCartStore.jsx
import { create } from 'zustand';

const useCartStore = create((set, get) => ({
    cart: [],
  
    addToCart: (item) =>
      set((state) => {
        const existingItem = state.cart.find((i) => i.id === item.id);
        if (existingItem) {
          return {
            cart: state.cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          };
        } else {
          return { cart: [...state.cart, item] };
        }
      }),
  
    removeFromCart: (id) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),
  
    clearCart: () => set({ cart: [] }),
  
    increaseQuantity: (id) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      })),
  
    decreaseQuantity: (id) =>
      set((state) => ({
        cart: state.cart
          .map((item) =>
            item.id === id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      })),
  
    getTotalPrice: () =>
      get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  }));

export default useCartStore;
