import {ActionIcon, Group, Image, Stack, Text} from "@mantine/core";
import {IconMinus, IconPlus, IconTrash} from "@tabler/icons-react";
import { useCart } from "@/context/useCart";
import type { CartItem as CartItemType } from "@/shared/types";
import styles from "./CartItem.module.scss";

type CartItemProps = {
    item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
    const {increaseQuantity, decreaseQuantity, removeFromCart} = useCart();

    const {
        product,
        quantity,
    } = item;

    return (
        <div className={styles.item}>
            <Image
                src={product.image}
                w={70}
                h={70}
                radius="md"
            />

            <Stack
                gap={4}
                className={styles.info}
            >
                <Text fw={600}>
                    {product.name}
                </Text>

                <Text
                    size="sm"
                    c="dimmed"
                >
                    ${product.price}
                </Text>

                <Group gap="xs">
                    <ActionIcon
                        variant="light"
                        onClick={() =>
                            decreaseQuantity(product.id)
                        }
                    >
                        <IconMinus size={16} />
                    </ActionIcon>

                    <Text
                        fw={600}
                        w={20}
                        ta="center"
                    >
                        {quantity}
                    </Text>

                    <ActionIcon
                        variant="light"
                        onClick={() =>
                            increaseQuantity(product.id)
                        }
                    >
                        <IconPlus size={16} />
                    </ActionIcon>
                </Group>
            </Stack>

            <ActionIcon
                color="red"
                variant="subtle"
                onClick={() =>
                    removeFromCart(product.id)
                }
            >
                <IconTrash size={18} />
            </ActionIcon>
        </div>
    );
};

export default CartItem;