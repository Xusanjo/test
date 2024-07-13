// 1-masala
export function sum (a,b){
    return a+b;
}

// 2-masala
export function subtract(num1,num2){
    return num1-num2;
}

// 3-masala
export function Multiply(num1, num2) {
    return num1 * num2
}

// 4-masala
export function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

// 5-masala
export function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 6-masala
export function reverseString(str) {
    return str.split('').reverse().join('');
}

// 7-masala

export function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 8-masala
export function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 9-masala
export function findMax(arr) {
    return Math.max(...arr);
}

// 10-masala
export function findMin(arr) {
    return Math.min(...arr);
}

// 11-masala 
export function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// 12-masala
export function averageArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}

// 13-masala
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 14-masala
export function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// 15-masala
export function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

// 16-masala
export function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

// 17-masala
export function flattenArray(arr) {
    return arr.flat(Infinity);
}

// 18-masala
export function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
}

// 19-masala
export function removeNullAndUndefined(arr) {
    return arr.filter(val => val !== null && val !== undefined);
}

// 20-masala
export function arrayIntersection(arr1, arr2) {
    return arr1.filter(val => arr2.includes(val));
}