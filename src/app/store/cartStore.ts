"use client";
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartItem {
  id: string;
  productName: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  isHydrated: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  hydrate: () => void;
  clearCart: () => void;
}

interface PersistedState {
  cart: CartItem[];
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      isHydrated: false,
      addToCart: (item) => {
        const state = get();
        const newCart = [...state.cart];
        const existingItem = newCart.find((i) => i.id === item.id);
        
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          newCart.push({ ...item, quantity: 1 });
        }
        
        set({ ...state, cart: newCart });
      },
      removeFromCart: (id) => {
        const state = get();
        const newCart = state.cart.filter(item => item.id !== id);
        set({ ...state, cart: newCart });
        
        if (typeof window !== 'undefined') {
          const storageData = {
            state: { cart: newCart, isHydrated: true },
            version: 0
          };
          window.localStorage.setItem('cart-storage', JSON.stringify(storageData));
        }
      },
      updateQuantity: (id, quantity) => {
        set((state) => ({
          ...state,
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }));
      },
      hydrate: () => set((state) => ({ ...state, isHydrated: true })),
      clearCart: () => set((state) => ({ ...state, cart: [] })),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }),
      merge: (persistedState: PersistedState, currentState: CartState) => {
        const mergedState: CartState = {
          cart: persistedState.cart || [],
          isHydrated: currentState.isHydrated,
          addToCart: currentState.addToCart,
          removeFromCart: currentState.removeFromCart,
          updateQuantity: currentState.updateQuantity,
          hydrate: currentState.hydrate,
          clearCart: currentState.clearCart,
        };
        return mergedState;
      }
    }
  )
);