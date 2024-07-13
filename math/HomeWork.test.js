import { describe, test, expect} from "vitest";
import { sum, subtract, Multiply, 
    divide, isPalindrome, reverseString, 
    factorial, fibonacci, findMax, 
    findMin, sumArray, averageArray, 
    removeDuplicates,
    capitalize,
    countVowels,
    isAnagram,
    flattenArray,
    chunkArray,
    removeNullAndUndefined,
    arrayIntersection} from "./HomeWork.js";

// 1-masala
describe("Sum function", () => {
    test("Should be add correcly", ()=> {
        const a = 2;
        const b = 3;

        const result = sum(a,b);

        expect (result).toBe(5);
    })
    test("Should be add2 correcly", ()=> {
        const a = 10;
        const b = 5;

        const result = sum(a,b);

        expect(result).toBe(15);
    })
    test("Should be add3 correcly", ()=> {
        const a = 7;
        const b = 8;

        const result = sum(a,b);

        expect(result).toBe(15)
    })
})

// 2-masala
describe("Subtract function", () => {
    test("Should be Subtract correcly", () => {
        const a = 4;
        const b = 5;

        const result = subtract(a,b);

        expect(result).toBe(-1);
    })
    test("Should be Subtract2 correcly", () => {
        const a = 20;
        const b = 12;

        const result = subtract(b,a);

        expect(result).toBe(-8)
    })
    test("Should be Subtract3 correcly", () => {
        const a = 7;
        const b = 4;

        const result = subtract(a,b);

        expect(result).toBe(3)
    })
})

// 3-masala
describe("Multiply function", () => {
    test("Should be Multiply correcly", () => {
        const a = 2;
        const b = 3;

        const result = Multiply(a,b);

        expect(result).toBe(6);
    })
    test("Should be Multiply2 correcly", () => {
        const a = 2;
        const b = 4;

        const result = Multiply(a,b);

        expect(result).toBe(8);
    })
    test("Should be Multiply3 correcly", () => {
        const a = 2;
        const b = 5;

        const result = Multiply(a,b);

        expect(result).toBe(10);
    })
})

// 4-masala
describe("Divide function", () => {
    test("Should be Divide correcly", () => {
        const a = 5;
        const b = 2;

        const result = divide(a,b);

        expect(result).toBe(2.5);
    })
    test("Should be Divide2 correcly", () => {
        const a = 6;
        const b = 2;

        const result = divide(a,b);

        expect(result).toBe(3);
    })
    test("Should be Divide3 correcly", () => {
        const a = 7;
        const b = 2;
        
        const result = divide(a,b);

        expect(result).toBe(3.5);
    })
})

// 5-masala
describe("Palindrome function", () => {
    test("Should be Palindrom correecly", () => {
        const result = isPalindrome("yessey")
        
        expect(result).toBe(true);
    })
    test("Should be Palindrom2 correcly", () => {
        const result = isPalindrome("biryuz");

        expect(result).toBe(false);
    })
    test("Should be Palindrom3 correcly", () => {
        const result = isPalindrome("asfdgfhg");
        expect(result).toBe(false);
    })
})

// 6-masala
describe("Reverse function", () => {
    test("Should be Reverse correcly", () => {
        const result = reverseString("hello");
        expect(result).toBe("olleh");
    })
    test("Should be Reverse2 correcly", () => {
        const result = reverseString("world");
        expect(result).toBe("dlrow")
    })
    test("Should be Reverse3 correcly", () => {
        const result = reverseString("nima");
        expect(result).toBe("amin");
    })
})

// 7-masala
describe("Factorial function", () => {
    test("Should be Factorial correcly", () => {
        expect(factorial(5)).toBe(120);
    })
    test("Should be Factorial2 correcly", () => {
        expect(factorial(3)).toBe(6);
    })
    test("Should be Factorial3 correcly", () => {
        expect(factorial(6)).toBe(720);
    })
})

// 8-masala
describe("Fibonachi function", () => {
    test("Should be Fibonachi correcly", () => {
        expect(fibonacci(5)).toBe(5)
    })
    test("Should be Fibonachi2 correcly", () => {
        expect(fibonacci(6)).toBe(8)
    })
    test("Should be Fibonachi3 correcly", () => {
        expect(fibonacci(7)).toBe(13)
    })
})

// 9-masala

describe("FinfMax function", () => {
    test("Should be FindMax correcly", () => {
        expect(findMax([1,2,3,4,5])).toBe(5);
    })
    test("Should be FindMax2 correcly", () => {
        expect(findMax([9,8,7,6,5])).toBe(9);
    })
    test("Should be FindMax3 correcly", () => {
        expect(findMax([1,9,2,8,3,7])).toBe(9);
    })
})

// 10-masala
describe("FindMix function", () => {
    test("Should be FindMin correcly", () => {
        expect(findMin([1,2,3,4,5])).toBe(1);
    })
    test("Should be FindMin2 correcly", () => {
        expect(findMin([9,3,4,6,5])).toBe(3);
    })
    test("Should be FindMin3 correcly", () => {
        expect(findMin([19,9,3,7,4])).toBe(3);
    })
})

// 11-masala
describe("SumArray function", () => {
    test("Should be SumArray correcly", () => {
        expect(sumArray([1,2,3,4,5])).toBe(15);
    })
    test("Should be SumArray correcly", () => {
        expect(sumArray([9,1,8,2,7,3])).toBe(30);
    })
    test("Should be SumArray correcly", () => {
        expect(sumArray([5,6,9,8,3])).toBe(31)
    })
})

// 12-masala
describe("AverageArray function", () => {
    test("Should be AverageArray correcly", () => {
        expect(averageArray([1,2,3,4,5])).toBe(3)
    })
    test("Should be AverageArray2 correcly", () => {
        expect(averageArray([2,3,4,5,6])).toBe(4);
    })
    test("Should be AverageArray3 correcly", () => {
        expect(averageArray([3,4,5,6,7])).toBe(5);
    })
})

// 13-masala
describe("RemoveDublicates function", () => {
    test("Should be RemoveDublicates correcly", () => {
        expect(removeDuplicates([2,3,4,5,2,3,4])).toEqual([2,3,4,5])
    })
    test("Should be RemoveDublicates2 correcly", () => {
        expect(removeDuplicates([5,5,55,5,5,5])).toEqual([5,55])
    })
    test("Should be RemoveDublicates3 correcly", () => {
        expect(removeDuplicates([6,7,4,5,4,5,4])).toEqual([6,7,4,5])
    })
})

// 14-masala
describe("Capitalize function", () => {
    test("Should be Capitalize correcly", () => {
        expect(capitalize("hello world")).toBe("Hello World")
    })
    test("Should be Capitalize2 correcly", () => {
        expect(capitalize("nima gap")).toBe("Nima Gap")
    })
    test("Should be Capitalize3 correcly", () => {
        expect(capitalize("fjkj kjhg")).toBe("Fjkj Kjhg")
    })
})

// 15-masala
describe("CountVowles function", () => {
    test("Should be CountVowles correcly", () => {
        expect(countVowels("salom")).toBe(2)
    })
    test("Should be CountVowles2 correcly", () => {
        expect(countVowels("aaaabbbaaa")).toBe(7)
    })
    test("Should be CountVowles3 correcly", () => {
        expect(countVowels("aoueiasf")).toBe(6)
    })
})

// 16-masala
describe("IsAgnagram function", () => {
    test("Should be IsAgnagram correcly", () => {
        expect(isAnagram("husan","nusah")).toBe(true);
    })
    test("Should be IsAgnagra2 correcly", () => {
        expect(isAnagram("asdfg","gfdsa")).toBe(true);
    })
    test("Should be IsAgnagram3 correcly", () => {
        expect(isAnagram("husan","nusash")).toBe(false);
    })
})

// 17-masala
describe("FlattenArray function", () => {
    test("Should be FlattenArray correcly", () => {
        expect(flattenArray([1,[2,3],2,[3,4]])).toEqual([1,2,3,2,3,4])
    })
    test("Should be FlattenArray2 correcly", () => {
        expect(flattenArray([1,[2],7,[3,4,5]])).toEqual([1,2,7,3,4,5])
    })
    test("Should be FlattenArray3 correcly", () => {
        expect(flattenArray([[1,2,3,4],4,3,2,1])).toEqual([1,2,3,4,4,3,2,1])
    })
})

// 18-masala
describe("ChunkArray function", () => {
    test("Should be ChunkArray correcly", () => {
        expect(chunkArray([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
    })
    test("Should be ChunkArray2 correcly", () => {
        expect(chunkArray([1,2,3,4,5,6], 2)).toEqual([[1,2],[3,4],[5,6]]);
    })
    test("Should be ChunkArray3 correcly", () => {
        expect(chunkArray([1,2,3,4,5,6,7], 2)).toEqual([[1,2],[3,4],[5,6],[7]]);
    })
})

// 19-masala
describe("RemoveNullAndUndefined function", () => {
    test("Should be Remove correcly", () => {
        expect(removeNullAndUndefined([1,null,2,undefined,3])).toEqual([1,2,3]);
    })
    test("Should be Remove2 correcly", () => {
        expect(removeNullAndUndefined([1,null,2,undefined])).toEqual([1,2]);
    })
    test("Should be Remove3 correcly", () => {
        expect(removeNullAndUndefined([1,null,2,undefined,3,undefined,4])).toEqual([1,2,3,4]);
    })
})

// 20-masala
describe("ArrayIntersection function", () => {
    test("Should be ArrayIntersection correcly", () => {
        expect(arrayIntersection([1,2,3],[2,3,4])).toEqual([2,3]);
    })
    test("Should be ArrayIntersection2 correcly", () => {
        expect(arrayIntersection([1,2,3,4],[2,3,4])).toEqual([2,3,4]);
    })
    test("Should be ArrayIntersectio3 correcly", () => {
        expect(arrayIntersection([1,2,],[2])).toEqual([2]);
    })
})