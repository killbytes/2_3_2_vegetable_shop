import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import ProductList from "./ProductList";
import { useFetch } from "@/hooks/useFetch";

vi.mock("@/hooks/useFetch");

const mockedUseFetch = vi.mocked(useFetch);

describe("ProductList", () => {
    it("shows loader while loading", () => {
        mockedUseFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        render(
            <MantineProvider>
                <ProductList />
            </MantineProvider>
        );

        expect(screen.getByTestId("loader")).toBeInTheDocument();
    });
});