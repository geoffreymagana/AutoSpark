
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Product } from '@/lib/data';

export type CartItem = Product & {
  quantity: number;
};

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product, quantity = 1) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return {
                items: state.items.filter((item) => item.id !== productId),
            };
          }
          return {
            items: state.items.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          };
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', 
      storage: createJSONStorage(() => localStorage),
    }
  )
);
