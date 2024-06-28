"use strict";
//Define variable
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
// create an Array
let fruits = ["apple", "banana", "orange"];
//Test for equality and unequality with strings
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("\n Is apple is not equal to apple");
console.log(apple != "apple");
//Test using Lowercase function
console.log("\n Is APPLE is equal to apple after converting into lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE is not equal to apple after converting into lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical Test
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("\n Is ten is  not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\n Is ten is grerater to zero");
console.log(10 > 0);
// Less than
console.log("\n Is twenty is less then ten?");
console.log(20 < 10);
// Greater than and equal to
console.log("\n Is  ten is greater then or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("\n Is twenty is less than  or equal to ten?");
console.log(20 <= 10);
// Test using "and" & "or" operators
//using &&(and)
console.log("\n Is twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != 10 && twenty > 10);
console.log("\n Is twenty is not equal to ten and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test whether an item is include in Array
console.log("\n Is orange is include in my fruit array");
console.log(fruits.includes("orange"));
//Not Include
console.log("\n Is orange is not include in my fruit array");
console.log(!fruits.includes("orange"));
