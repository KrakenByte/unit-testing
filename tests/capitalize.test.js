import { capitalize } from "../functions/capitalize";

test("should be defined", () => {
    expect(capitalize).toBeDefined();
});

test("should capitalize a lowercase word", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("should capitalize another lowercase word", () => {
    expect(capitalize("apple")).toBe("Apple");
});

test("should return empty string when input is empty", () => {
    expect(capitalize("")).toBe("");
});

test("should capitalize a single lowercase character", () => {
    expect(capitalize("b")).toBe("B");
});