import { fibonacci } from "./fibonacci";

describe("is the result correct", () => {
    test("0 -> 1", () => {
        expect(fibonacci(0)).toEqual(1);
    });
    test("1 -> 1", () => {
        expect(fibonacci(1)).toEqual(1);
    });
    test("2 -> 2", () => {
        expect(fibonacci(2)).toEqual(2);
    });
    test("3 -> 3", () => {
        expect(fibonacci(3)).toEqual(3);
    });
    test("4 -> 5", () => {
        expect(fibonacci(4)).toEqual(5);
    });
    test("5 -> 8", () => {
        expect(fibonacci(5)).toEqual(8);
    });
    test("6 -> 13", () => {
        expect(fibonacci(6)).toEqual(13);
    });
    test("7 -> 21", () => {
        expect(fibonacci(7)).toEqual(21);
    });
    test("13 -> 377", () => {
        expect(fibonacci(13)).toEqual(377);
    });
    test("21 -> 17711", () => {
        expect(fibonacci(21)).toEqual(17711);
    });
    test("42 -> 433494437", () => {
        expect(fibonacci(42)).toEqual(433494437);
    });
    test("-25 -> 0", () => {
        expect(fibonacci(-25)).toEqual(0);
    });
});
