import {Center, Alert, Loader, SimpleGrid} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

import ProductCard from "@/components/ProductCard/ProductCard";
import type { Product } from "@/shared/types/Product";

import {useEffect, useState} from "react";
import { useFetch } from "@/hooks/useFetch";
import { getProducts } from "@/services/products";


// const API_URL = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
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

    // const [products, setProducts] = useState<Product[]>([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");
    // useEffect(() => {
    //     const loadProducts = async () => {
    //         try {
    //             const response = await fetch(API_URL);
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch products");
    //             }
    //             const data: Product[] = await response.json();
    //             await new Promise((resolve) => setTimeout(resolve, 5000));
    //             setProducts(data);
    //         } catch (err) {
    //             if (err instanceof Error) {
    //                 setError(err.message);
    //             } else {
    //                 setError("Unknown error");
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //
    //     loadProducts();
    // }, []);
    //
    // if (loading) {
    //     return (
    //         <Center py="xl">
    //             <Loader />
    //         </Center>
    //     );
    // }
    //
    // if (error) {
    //     return (
    //         <Center py="xl">
    //             <Text c="red">{error}</Text>
    //         </Center>
    //     );
    // }

    return (
        <SimpleGrid
            cols={{
                base: 1,
                sm: 2,
                lg: 4,
            }}
            spacing="xs"
        >
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </SimpleGrid>
    );
};

export default ProductList;