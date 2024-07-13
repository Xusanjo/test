import { describe, test, expect } from "vitest";
import { addMatrices, binarySearch, mergeSort, multiplyMatrices, quickSort } from "./bonus.js";

// 1-bonus
describe("Matrix Function", () => {
    test("Matrix test 1", () => {
        expect(addMatrices([[1,2],[3,4]],[[5,6],[7,8]])).toEqual([[6,8],[10,12]])
    })
    test("Matrix test 2", () => {
        expect(addMatrices([[1,2,3],[4,5,6]],[[9,8,7],[14,13,12]])).toEqual([[10,10,10],[18,18,18]]);
    })
    test("Matrix test 3", () => {
        expect(addMatrices([],[])).toEqual([])
    })
    test("Matrix test 4", () => {
        expect(addMatrices([[1,2],[3,4]],[[7,6],[8,9]])).toEqual([[8,8],[11,13]])
    })
})

// 2-bonus
describe("Matrix Kupaytirma Function", () => {
    test("MultiMatrix test 1", () => {
        expect(multiplyMatrices([[1,2],[3,4]],[[5,6],[7,8]])).toEqual([[19,22],[43,50]])
    })
    test("MultiMatrix test 2", () => {
        expect(multiplyMatrices([[1,2,3],[4,5,6]],[[7,8],[9,10],[11,12]])).toEqual([[58,64],[139,154]])
    })
    test("MultiMatrix test 3", () => {
        expect(multiplyMatrices([[],[]],[[],[]])).toEqual([[],[]])
    })
})

// 3-bonus
describe("MergeSort function", () => {
    test("Merge Sort test 1", () => {
        expect(mergeSort([5,3,8,4,2])).toEqual([2,3,4,5,8]);
    })
    test("Merge Sort test 2", () => {
        expect(mergeSort([9,3,6,8,3,5])).toEqual([3,3,5,6,8,9]);
    })
    test("Merge Sort test 3", () => {
        expect(mergeSort([4,7,2,3,8,5])).toEqual([2,3,4,5,7,8]);
    })
})

// 4-bonus
describe("QiuckSort function", () => {
    test("QuickSort test 1", () => {
        expect(quickSort([5,3,8,4,2])).toEqual([2,3,4,5,8])
    })
    test("QuickSort test 2", () => {
        expect(quickSort([13,9,14,8,15])).toEqual([8,9,13,14,15])
    })
    test("QuickSort test 3", () => {
        expect(quickSort([5,8,3,6,4,9])).toEqual([3,4,5,6,8,9])
    })
})

// 5-bonus
describe("BinarySearch function", () => {
    test("BinarySearch test 1", () => {
        expect(binarySearch([1,2,3,4,5],4)).toBe(3)
    })
    test("BinarySearch test 2", () => {
        expect(binarySearch([1,2,3,4,5],2)).toBe(1)
    })
    test("BinarySearch test 3", () => {
        expect(binarySearch([1,2,3,4,5,6,7,8,9,0],9)).toBe(8)
    })
})