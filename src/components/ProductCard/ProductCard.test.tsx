import {screen, fireEvent} from "@testing-library/react";
import {describe, it, expect} from "vitest";
import ProductCard from "./ProductCard";
import {renderWithProviders} from "@/test/utils";

const product = {
    id: 1,
    name: "Brocolli - 1 Kg",
    price: 120,
    image: "image.jpg",
    category: "vegetables",
};

describe("ProductCard", () => {
    it("renders product information", () => {
        renderWithProviders(<ProductCard product={product}/>);
        expect(screen.getByText("Brocolli")).toBeInTheDocument();
        expect(screen.getByText("1 Kg")).toBeInTheDocument();
        expect(screen.getByText("$120")).toBeInTheDocument();
        expect(screen.getByText("Add to cart")).toBeInTheDocument();
    });

    it("changes quantity", () => {
        renderWithProviders(<ProductCard product={product}/>);
        const plusButton = screen.getByRole("button",
            {
                name: /increase quantity/i,
            }
        );
        fireEvent.click(plusButton);
        expect(screen.getByText("2")).toBeInTheDocument();
    });

    it("decreases quantity", () => {

        renderWithProviders(<ProductCard product={product}/>);

        const plusButton =
            screen.getByRole("button",
                {
                    name: /increase quantity/i,
                }
            );

        const minusButton =
            screen.getByRole(
                "button",
                {
                    name: /decrease quantity/i,
                }
            );
        fireEvent.click(plusButton);
        fireEvent.click(minusButton);
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("does not decrease quantity below one", () => {
        renderWithProviders(<ProductCard product={product}/>);
        const minusButton =
            screen.getByRole(
                "button",
                {
                    name: /decrease quantity/i,
                }
            );
        fireEvent.click(minusButton);
        expect(screen.getByText("1")).toBeInTheDocument();
    });
});