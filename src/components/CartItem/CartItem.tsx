import {ActionIcon, Divider, Group, Image, Stack, Text} from "@mantine/core";
import {IconMinus, IconPlus} from "@tabler/icons-react";
import {useCart} from "@/context/useCart";
import type {CartItem as CartItemType} from "@/shared/types";
import styles from "./CartItem.module.scss";

type CartItemProps = {
    item: CartItemType;
};

const CartItem = ({item}: CartItemProps) => {
    const {increaseQuantity, decreaseQuantity} = useCart();
    const {product, quantity} = item;
    const title = product.name;
    const [name, weight] = title.split(" - ");

    return (
        <div className={styles.item}>

            <Stack gap="md">
                {/* Товар */}
                <Group wrap="nowrap" justify="space-between">
                    <Group gap="sm" wrap="nowrap">
                        <Image
                            src={product.image}
                            alt="Tomato"
                            w={64}
                            h={64}
                            fit="contain"
                        />

                        <div>
                            <Group gap={8} align="center">
                                <Text fw={700} size="xs">
                                    {name}
                                </Text>
                                <Text c="dimmed" size="xs">
                                    {weight}
                                </Text>
                            </Group>
                            <Text fw={700} size="xs">
                                ${product.price}
                            </Text>
                        </div>
                    </Group>

                    <Group gap="sm" wrap="nowrap" style={{flex: 1}} justify={"flex-end"}>
                        <ActionIcon
                            variant="light"
                            color="gray"
                            onClick={() =>
                                decreaseQuantity(product.id)
                            }
                        >
                            <IconMinus size={18}/>
                        </ActionIcon>

                        <Text size="xl">{quantity}</Text>

                        <ActionIcon
                            variant="light"
                            color="gray"
                            onClick={() =>
                                increaseQuantity(product.id)
                            }
                        >
                            <IconPlus size={18}/>
                        </ActionIcon>
                    </Group>
                </Group>
                <Divider ml={80}/>
            </Stack>
        </div>
    );
};

export default CartItem;