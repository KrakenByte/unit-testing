import { analyzeArray } from "../functions/analyzeArray";

test("should be defined", () => {
    expect(analyzeArray).toBeDefined();
})

const object = {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};

test("should analyze an array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(object);
})