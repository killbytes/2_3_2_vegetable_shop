import { CartContext } from "./CartContext";
import type { ReactNode } from "react";
import type { Product } from "@/shared/types/Product";
import type { CartItem } from "@/shared/types/CartItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type CartProviderProps = {
    children: ReactNode;
};

export default function CartProvider({children}: CartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []);

    const addToCart = (
        product: Product,
        quantity: number
    ) => {
        setCartItems((prev) => {
            const existing = prev.find(
                (item) => item.product.id === product.id
            );

            if (existing) {
                return prev.map((item) =>
                    item.product.id === product.id ? {...item, quantity: item.quantity + quantity} : item
                );
            }

            return [...prev, {product, quantity},
            ];
        });
    };

    const increaseQuantity = (productId: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.product.id === productId ? {...item, quantity: item.quantity + 1} : item
            )
        );
    };

    const decreaseQuantity = (productId: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                    item.product.id === productId ? {...item, quantity: item.quantity - 1} : item)
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prev) =>
            prev.filter((item) => item.product.id !== productId)
        );
    };

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0);

    const totalQuantity = cartItems.reduce(
        (sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                totalPrice,
                totalQuantity,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}