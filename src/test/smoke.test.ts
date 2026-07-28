import { describe, expect, it } from "vitest";

describe("smoke", () => {
    it("has localStorage", () => {
        expect(window).toBeDefined();
        expect(window.localStorage).toBeDefined();
    });
    // it("debug", () => {
    //     console.log(window.location.href);
    //     console.log(Object.getOwnPropertyNames(window).includes("localStorage"));
    //     console.log(Object.getOwnPropertyDescriptor(window, "localStorage"));
    // });
    it("debug", () => {
        console.log(import.meta.env.VITEST);
        console.log(window.constructor.name);
        console.log(document.constructor.name);
        console.log(window.location.href);
        console.log(window.localStorage);
    });
});