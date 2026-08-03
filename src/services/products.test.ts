import { describe, it, expect, vi } from "vitest";
import { getProducts } from "./products";

describe("getProducts", () => {
    it("returns products array", async () => {
        const mockProducts = [
            {
                id: 1,
                name: "Tomato",
                price: 2,
                image: "tomato.jpg",
                category: "vegetable",
            },
        ];

        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => mockProducts,
        });

        const result = await getProducts();

        expect(result).toEqual(mockProducts);
        expect(result).toHaveLength(1);
        expect(fetch).toHaveBeenCalled();
    });

    it("throws error when request fails", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
        });

        await expect(getProducts())
            .rejects
            .toThrow("Failed to load products");
    });
});