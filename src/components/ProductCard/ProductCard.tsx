import {useState} from "react";
import {Button, Card, Group, Image, Text, ActionIcon, Stack, Center,} from "@mantine/core";
import {IconMinus, IconPlus, IconShoppingCart} from "@tabler/icons-react";
import type {Product} from "@/shared/types/Product";
import styles from "./ProductCard.module.scss";
import { useCart } from "@/context/useCart";

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({product}: ProductCardProps) => {
    const [count, setCount] = useState(1);
    const increase = () => setCount((prev) => prev + 1);
    const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
    const { addToCart } = useCart();
    const title = product.name;
    const [name, weight] = title.split(" - ");
    return (
        <Card
            shadow="sm"
            radius="md"
            className={styles.card}
            p="md"
            withBorder={false}
        >
            <Card.Section>
                <Center h={260}>
                    <Image
                        src={product.image}
                        alt="Product"
                        fit="contain"
                        h={220}
                        w="80%"
                    />
                </Center>
            </Card.Section>
            <Stack gap="xs" mt="sm">
                <Group justify="space-between" align="flex-end">
                    <Group gap={8}>
                        <Text fw={600} size="xs">
                            {name}
                        </Text>
                        <Text c="dimmed" size="sm">
                            {weight}
                        </Text>
                    </Group>
                    <Group gap={8}>
                        <ActionIcon
                            aria-label="decrease quantity"
                            variant="light"
                            radius="md"
                            color="gray"
                            onClick={decrease}
                        >
                            <IconMinus size={18}/>
                        </ActionIcon>
                        <Text fw={500}>
                            {count}
                        </Text>
                        <ActionIcon
                            aria-label="increase quantity"
                            onClick={increase}
                            variant="light"
                            radius="md"
                            color="gray"
                        >
                            <IconPlus size={18} color="#212529"/>
                        </ActionIcon>
                    </Group>
                </Group>
                <Group justify="space-between" align="center">
                    <Text
                        fw={700}
                        size="20px"
                        lh={1}
                    >
                        ${product.price}
                    </Text>
                    <Button
                        radius="md"
                        color="green"
                        variant="light"
                        rightSection={<IconShoppingCart size={18} />}
                        styles={{
                            root: {
                                flex: 1,
                                marginLeft: 16,
                            },
                        }}
                        onClick={() => addToCart(product, count)}
                    >
                        Add to cart
                    </Button>
                </Group>
            </Stack>
        </Card>
    );
};

export default ProductCard;