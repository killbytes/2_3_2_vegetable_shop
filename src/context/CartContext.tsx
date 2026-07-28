import { createContext } from "react";

import type { CartItem } from "@/shared/types/CartItem";
import type { Product } from "@/shared/types/Product";

export interface CartContextType {
    cartItems: CartItem[];
    totalPrice: number;
    totalQuantity: number;
    addToCart: (product: Product, quantity: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);