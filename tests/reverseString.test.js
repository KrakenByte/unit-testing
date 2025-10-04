import { reverseString } from "../functions/reverseString";

test("should be defined", () => {
    expect(reverseString).toBeDefined();
})

test("should reverse a word", () => {
    expect(reverseString("hello")).toBe("olleh");
})

test("should reverse another word", () => {
    expect(reverseString("okay")).toBe("yako");
})

test("should return empty string when input is empty", () => {
    expect(reverseString("")).toBe("");
})

test("should reverse a sentence", () => {
    expect(reverseString("Hey man, how's it going?")).toBe("?gniog ti s'woh ,nam yeH");
})