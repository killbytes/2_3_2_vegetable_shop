import {Group, Image, Stack, Text} from "@mantine/core";
import { useCart } from "@/context/useCart";
import CartItem from "@/components/CartItem/CartItem";
import cartEmpty from '../../shared/assets/cart_empty.png';

const CartPopup = () => {
    const {
        cartItems,
        totalPrice,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <Stack align="center" gap="md">
                <Image
                    src={cartEmpty}
                    alt="Tomato"
                    w={120}
                    h={106}
                    fit="contain"
                />
                <Text ta="center" style={{color:"#868E96"}} >
                    You cart is empty!
                </Text>
            </Stack>
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

            <Group justify="space-between">
                <Text fw={700} size="xs">
                    Total
                </Text>

                <Text fw={700} size="xs">
                    ${totalPrice}
                </Text>
            </Group>
        </Stack>
    );
};

export default CartPopup;