//! Q NO. 1
// Declare a variable name using let and assign it your name. Declare a constant PI and assign it the value 3.14159. Try reassigning PI and observe what happens.

let name = "huzaifa";
const p1 = 3.145;
// p1 = 1.5;
// console.log(name, p1);

//! Q NO. 2
//  let const var
// Create variables using var, let, and const and explain differences.

let name1 = "ali";
name1 = "huzaifa"; //!reassign allow
//  let name1 = 'huzaifa'; redeclare not allowed.

var name2 = "malik";
var name2 = "haasan"; //!redeclareation allow
name2 = "hhh"; //! reassign allow

const name3 = "alikhan";
// const name3 = 'hhhh' //!redeclareation not allow
// name3 = 'adff' //! reassign not allow

//! Q NO. 3
// What will be output and why?

let a = 10;
let b = a;
b = 20;
// console.log(b);

//a remains 10 because b received a copy of the value, not a reference to a, so changing b does not affect a.

//! Q NO. 4
// Function to check number.
let number = -90;

function checkNumber(number) {
  if (number > 0) {
    // console.log('positive');
  } else if (number < 0) {
    // console.log('negative');
  } else {
    // console.log('zero');
  }
}
checkNumber(number);

//! Q NO. 5
// Check age eligibility.

let age = 19;
const checkAge = (age) => {
  if (age > 18 && age < 60) {
    // console.log('eligible');
  } else {
    // console.log('not eligible');
  }
};
// console.log(checkAge(age));

//! Q NO. 6
// Leap year using nested if.

// let year = 2000;
// if(year / 400 % 0){
//     console.log('leap year');

//     if((year / 4 % 0) && (year / 100 % 0))

// }

//! Q NO. 7
// use a for loop to print all even numbers form 2 to 20.

for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

//! Q NO. 8
// Sum from 1 to 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
// console.log(sum)

//! Q No 9
// FizzBuzz.
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    // console.log("Fizz");
  } else if (i % 5 === 0) {
    // console.log("Buzz");
  } else {
    // console.log("FizzBuzz");
  }
  //   console.log(i);
}

//! Q No 10
// Array operations.
// add element to last of array 
// also delete first element

let fruits = ["apple", "banana", "mango"];
// console.log(fruits);
fruits.push("Orange"); //add orange to last of array
fruits.shift(); // remove first element of array
// console.log(fruits);


//! Q No 11
// map() method.
// double the array elements

const numbers= [3,7,2,9,5]
const double = numbers.map(num => num * 2);
// console.log(double);

//! Q No 12
// filter() method.
// create new array containing only numbers greater than 15

const numbers1 = [10,25,5,40,15]
const filtered = numbers1.filter(num => num > 15)
// console.log(filtered);


//! Q No 13
// reduce() product.
// find product of all numbers in the array

const arr = [2,3,4]
const product = arr.reduce()