import type { Product } from "@/shared/types/Product";

const PRODUCTS_URL =
    "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(PRODUCTS_URL);
    if (!response.ok) {
        throw new Error("Failed to load products");
    }
    const result: Product[] = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 2000)); // immitation 3g
    return result;
}