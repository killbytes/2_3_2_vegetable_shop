import {Alert, Loader, SimpleGrid} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import ProductCard from "@/components/ProductCard/ProductCard";
import type { Product } from "@/shared/types/Product";
import { useFetch } from "@/hooks/useFetch";
import { getProducts } from "@/services/products";

const ProductList = () => {
    const {data: products, loading, error} = useFetch<Product[]>(getProducts);

    if (loading) {
        return <Loader />;
    }
    if (error) {
        return (
            <Alert
                color="red"
                icon={<IconAlertCircle size={16} />}
            >
                {error}
            </Alert>
        );
    }

    return (
        <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 4 }}
            spacing="lg"
        >
            {(products ?? []).map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </SimpleGrid>
    );
};

export default ProductList;