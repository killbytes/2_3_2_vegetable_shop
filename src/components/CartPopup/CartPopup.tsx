import { Divider, Stack, Text } from "@mantine/core";
import { useCart } from "@/context/useCart";
import CartItem from "@/components/CartItem/CartItem";

const CartPopup = () => {
    const {
        cartItems,
        totalPrice,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <Text ta="center">
                Cart is empty
            </Text>
        );
    }

    return (
        <Stack gap="xs">
            {cartItems.map((item) => (
                <CartItem
                    key={item.product.id}
                    item={item}
                />
            ))}

            <Divider />

            <Text
                fw={700}
                ta="right"
            >
                Total: ${totalPrice}
            </Text>
        </Stack>
    );
};

export default CartPopup;