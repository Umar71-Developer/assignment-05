"use strict";
//Q.1 Write a program that uses filter to remove all negative numbers from an array of numbers
let arr = [2, 3, -6, -7, 8, 9, -5];
const removeNegative = arr.filter((data => data >= 0));
console.log(removeNegative);
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let arr1 = [1, 2, 3, 4, 5];
const newarrMultiply = arr1.map((data) => data * 2);
console.log(newarrMultiply);
//Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let arr2 = ["apple", "banana", "cherry", "dates", "grapes"];
const fruits = arr2.filter((data) => {
    return data.length > 5;
});
console.log(fruits);
//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//By using map method
const squaresOfEven = arr3.map((data, index) => {
    if (data % 2 == 0) {
        return (data) ** 2;
    }
});
console.log(squaresOfEven);
//by using filter method
const squares = arr3.filter((data) => {
    if (data % 2 == 0) {
        return (data) ** 2;
    }
});
console.log(squares);
//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let arr4 = [0, 10, 20, 30, 40];
const temToFahreheit = arr4.map((data) => {
    return (data * 9 / 5) + 32;
});
console.log(temToFahreheit);
//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let arr5 = [3, 6, 9, 12, 15, 18];
//by using map method
const doubled = arr5.map((data) => {
    if (data % 2 != 0) {
        return data * 2;
    }
});
console.log(doubled);
//by using filter method
const doubled1 = arr5.filter((data) => {
    if (data % 2 != 0) {
        return data * 2;
    }
});
console.log(doubled1);
//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let arr6 = ["Alice", "Bob", "Charlie", "David", "Emily"];
const foreach = arr6.forEach(function (data) {
    console.log("".concat(data, "!"));
});
