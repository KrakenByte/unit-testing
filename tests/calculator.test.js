import { Calculator } from "../functions/calculator";
const calculator = new Calculator();

describe("Calculator", () => {
    test("should be defined", () => {
        expect(calculator).toBeDefined();
    });

    describe("Addition", () => {
        test("should add two positive integers", () => {
            expect(calculator.add(12, 15)).toBe(27);
        });

        test("should add a positive integer and a negative integer", () => {
            expect(calculator.add(12, -15)).toBe(-3);
        });

        test("should add two floating point numbers", () => {
            expect(calculator.add(12.5, 2.3)).toBeCloseTo(14.8);
        });
    });

    describe("Subtraction", () => {
        test("should subtract two positive integers", () => {
            expect(calculator.subtract(15, 12)).toBe(3);
        });

        test("should subtract a positive integer from a negative integer", () => {
            expect(calculator.subtract(12, -15)).toBe(27);
        });

        test("should subtract two floating point numbers", () => {
            expect(calculator.subtract(12.5, 2.3)).toBeCloseTo(10.2);
        });
    });

    describe("Multiplication", () => {
        test("should multiply two positive integers", () => {
            expect(calculator.multiply(6, 5)).toBe(30);
        });

        test("should multiply two negative integers", () => {
            expect(calculator.multiply(-6, -5)).toBe(30);
        });

        test("should multiply a negative integer with a positive integer", () => {
            expect(calculator.multiply(-6, 5)).toBe(-30);
        });

        test("should return 0 if first input is 0", () => {
            expect(calculator.multiply(0, 12120)).toBe(0);
        });

        test("should return 0 if second input is 0", () => {
            expect(calculator.multiply(41515, 0)).toBe(0);
        });

        test("should multiply two floating point numbers", () => {
            expect(calculator.multiply(0.4, 20.9)).toBeCloseTo(8.36);
        });
    });
    describe("Division", () => {
        test("should divide a positive integer by another positive integer", () => {
            expect(calculator.divide(8, 2)).toBe(4);
        });

        test("should divide a positive integer by a negative integer", () => {
            expect(calculator.divide(8, -2)).toBe(-4);
        });

        test("should divide a floating point by an integer", () => {
            expect(calculator.divide(4.3, 2)).toBeCloseTo(2.15);
        });

        test("should handle division by zero", () => {
            expect(calculator.divide(4848, 0)).toBeUndefined();
        });
        
    });
});
