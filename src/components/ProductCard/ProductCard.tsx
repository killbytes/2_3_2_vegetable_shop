import {useState} from "react";
import {Button, Card, Group, Image, Text, ActionIcon,} from "@mantine/core";
import {IconMinus, IconPlus} from "@tabler/icons-react";
import type {Product} from "@/shared/types/Product";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({product}: ProductCardProps) => {
    const [count, setCount] = useState(1);
    const increase = () => setCount((prev) => prev + 1);
    const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
    return (
        <Card
            shadow="sm"
            radius="md"
            className={styles.card}
        >
            <Card.Section>
                <Image
                    src={product.image}
                    height={180}
                />
            </Card.Section>

            <Text
                fw={600}
                mt="md"
            >
                {product.name}
            </Text>

            <Text
                c="green"
                fw={700}
                size="lg"
            >
                ${product.price}
            </Text>

            <Group
                justify="center"
                mt="md"
            >
                <ActionIcon
                    variant="light"
                    onClick={decrease}
                >
                    <IconMinus size={18}/>
                </ActionIcon>

                <Text
                    fw={600}
                    w={30}
                    ta="center"
                >
                    {count}
                </Text>

                <ActionIcon
                    color="#DEE2E6"
                    variant="light"
                    onClick={increase}
                >
                    <IconPlus size={18} color="#212529"/>
                </ActionIcon>
            </Group>

            <Button
                fullWidth
                mt="lg"
                color="#E7FAEB"
                c="#3B944E"
            >
                Add to cart
            </Button>
        </Card>
    );
};

export default ProductCard;