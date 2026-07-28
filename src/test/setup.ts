import "@testing-library/jest-dom/vitest";
import { beforeAll, beforeEach, vi } from "vitest";

beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: (query: string) => ({
            matches: false,
            media: query,
            onchange: null,

            addListener: () => {},
            removeListener: () => {},

            addEventListener: () => {},
            removeEventListener: () => {},

            dispatchEvent: () => false,
        }),
    });
});

let store: Record<string, string> = {};

const localStorageMock = {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
        delete store[key];
    }),
    clear: vi.fn(() => {
        store = {};
    }),
};

beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
        value: localStorageMock,
        configurable: true,
    });
});
beforeEach(() => {
    store = {};
    vi.clearAllMocks();
});