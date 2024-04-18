// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one 
// False result for each of the following: 
var banana = "banana ";
var upperCase = "BANANA";
var twenty = 20;
var fourty = 40;
var fruits = ["banana", "apple", "orange",];
//test for equality and inequality with strings
console.log("Is banana is equal to banana?");
console.log(banana == "banana");
console.log("Is banana is not equal to banana?");
console.log(banana != "banana");
//Test using lowerCase Function
console.log("Is banana is equal to banana after converting to lowerCase?");
console.log(upperCase.toLowerCase() == "banana");
console.log("Is banana is not equal to banan after converting to lowerCase?");
console.log(upperCase.toLowerCase() != "banana");
// Numerical tests
console.log("Is twenty equal to fourty?");
console.log(twenty == fourty);
//Not equal to
console.log("Is twenty not equal to fourty?");
console.log(twenty != fourty);
// greater than
console.log("Is twenty greater than zero?");
console.log(twenty > 0);
//less than
console.log("Is fourty less than twenty?");
console.log(fourty < 20);
// greater than or equal to
console.log("Is twenty greater than or equal to zero?");
console.log(twenty >= 0);
// less than or equal to
console.log("Is fourty less than or equal to twenty?");
console.log(fourty <= 20);
//tests using "and" & "or" operators
console.log("fourty is not equal to 20 and fourty is greater than 20");
console.log(fourty != 20 && fourty > 20);
console.log("fourty is not equal to 20 and fourty is greater than 20?");
console.log(fourty != 20 && fourty > 60);
//using || (or)
console.log("\n fourty is greater than 50 or 20 is equal to 20");
console.log(40 > 50 || 20 == 20);
console.log("fourty is greater than 50 or 20 is equal to 20?");
console.log(40 > 50 || 20 != 20);
// Test weather an item is include in array
console.log("\nIs apple include in my fruits array?");
console.log(fruits.includes("apple"));
console.log("Is orange not include in my fruits array?");
console.log(!fruits.includes("orange"));
