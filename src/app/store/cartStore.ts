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
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      isHydrated: false,
      addToCart: (item) => {
        console.log('[addToCart] Adding item:', item); // Log the item being added
        const existingItem = get().cart.find((i) => i.id === item.id);
        if (existingItem) {
          console.log('[addToCart] Item already exists, updating quantity:', existingItem); // Log existing item
          set((state) => ({
            cart: state.cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          }));
        } else {
          console.log('[addToCart] Item is new, adding to cart:', item); // Log new item
          set((state) => ({ cart: [...state.cart, { ...item, quantity: 1 }] }));
        }
        console.log('[addToCart] Updated cart:', get().cart); // Log the updated cart
      },
      removeFromCart: (id) => {
        console.log('[removeFromCart] Removing item with ID:', id); // Log the ID of the item being removed
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
        console.log('[removeFromCart] Updated cart:', get().cart); // Log the updated cart
      },
      updateQuantity: (id, quantity) => {
        console.log('[updateQuantity] Updating item with ID:', id, 'New quantity:', quantity); // Log the ID and new quantity
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }));
        console.log('[updateQuantity] Updated cart:', get().cart); // Log the updated cart
      },
      hydrate: () => {
        console.log('[hydrate] Hydrating store'); // Log when hydration occurs
        set({ isHydrated: true });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }),
      onRehydrateStorage: () => (state) => {
        console.log('[onRehydrateStorage] Rehydrating store:', state); // Log the state during rehydration
        state?.hydrate();
      },
    }
  )
);