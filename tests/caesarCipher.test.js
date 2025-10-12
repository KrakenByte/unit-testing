import { caesarCipher } from "../functions/caesarCipher";

test("should be defined", () => {
    expect(caesarCipher).toBeDefined();
})

test("should change 'xyz' to 'abc' with a shifting factor of 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test("should change 'Xyz' to 'abc' with a shifting factor of 3", () => {
    expect(caesarCipher("Xyz", 3)).toBe("Abc");
})

test("should change 'HeLLo' to 'KhOOr' with a shifting factor of 3", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

test("should change 'Hello, World!' to 'Khoor, Zruog!' with a shifting factor of 3", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
})


