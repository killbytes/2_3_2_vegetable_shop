import {screen, fireEvent} from "@testing-library/react";
import {describe, it, expect} from "vitest";
import ProductCard from "./ProductCard";
import Header from "@/components/Header/Header";
import {renderWithProviders} from "@/test/utils";
// import {prettyDOM} from "@testing-library/dom";

const product = {
    id: 1,
    name: "Brocolli - 1 Kg",
    price: 120,
    image: "image.jpg",
    category: "vegetables",
};

describe("ProductCard cart integration", () => {

    it("adds product to cart", async () => {
        renderWithProviders(
            <>
                <Header/>
                <ProductCard
                    product={product}
                />
            </>
        );
        fireEvent.click(screen.getByText("Add to cart"));
        expect(
            screen.getByRole("button", {
                name: "Cart (1)",
            })
        ).toBeInTheDocument();
    });


    it("adds selected quantity to cart", () => {
        renderWithProviders(
            <>
                <Header/>
                <ProductCard
                    product={product}
                />

            </>
        );

        const plusButton =
            screen.getByRole(
                "button",
                {
                    name: /increase quantity/i,
                }
            );

        fireEvent.click(plusButton);
        fireEvent.click(screen.getByText("Add to cart"));
        expect(
            screen.getByRole("button", {
                name: "Cart (2)",
            })
        ).toBeInTheDocument();
    });
});