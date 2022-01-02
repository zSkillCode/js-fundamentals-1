//
// JS BASICS
//

/*
VARIABLES:

There are 3 types of variables ->
var: mutable, should not be used anymore (legacy)
let: mutable
const: immutable
*/

// Semicolon is not required, but good practice
let age = 16;
age = 17;
// Variables that are not going to change should be declared as "const"
const name = 'David'; // Cannot be reassigned

// Logs both variables to the browser's console
console.log(age, name);

// Constants should always be uppercase
const PI = 3.1415;

/*
DATA TYPES:

There are 7 primitive data types:
1. Number -> decimals and integers
2. String -> Texts
3. Boolean -> true/false

4. Undefined -> Variable with no defined value
5. Null -> Variables declared with null also have no value
6. Symbol -> Value that is unique and cannot be changed
7. Larger integers
*/
const favouriteNumber = 3;
const firstName = 'David'
const jsIsCool = true;

let undefinedVariable; // No value defined
let alsoNoValue = null;

// Type conversion
const inputYear = '1991';
console.log(inputYear + 18); // Will concat 18 to 1991 (=199118)
console.log(Number(inputYear) + 18); // Will add 18 to 1991 (=2009)

console.log(Number('Hi')); // 'Hi' is not a number, it will return NaN
console.log(typeof NaN); // NaN is of type "number"

console.log(String(83));

// Type coercion
console.log('My favourite number is ' + 3);  // Converts the number to a string
console.log('23' - '10' - 3); // Converts all strings to numbers (=10)
console.log('23' + '10' + 3); // Converts the number to a string

console.log('23' * '2'); // = 46
console.log('23' / '2'); // = 11.5

// 5 falsy values: 0, '', undefined, null, NaN
// Everything else is truthy
console.log(Boolean(0)); // false
console.log(undefined); // false
console.log(Boolean('Hi')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0;
if (money) {
    console.log('You have some money!');
} else {
    console.log('You have no money :(');
}

let height;
if (height) { // Problem if height = 0
    console.log('Height is defined!')
} else {
    console.log('Height is undefined!')
}
/*
USE " " OR ' ' FOR STRINGS?
 */
// It is completely up to you, but in some situations one of these options might be better
// Example where " " is the better option:
const example1 = "I don't like...";
const example2 = 'I don\'t like...';
// Example where ' ' is the better option:
const example3 = 'He said "I like..."';
const example4 = "He said \"I like...\"";

/*
BASIC OPERATIONS
 */
console.log(7 + 8); // 15
console.log(9 - 3); // 6
console.log(3 * 4); // 12
console.log(5 / 3); // 1.6666666666666667
console.log(4 ** 4); // 256

// + is also used for joining strings
const firstString = 'hello';
const space = ' ';
const secondString = 'there!';
const message = firstString + space + secondString;

console.log(message);

// Typeof returns the type of the variable
const someNumber = 3;
const someString = 'Hi';

console.log(typeof someNumber); // number
console.log(typeof someString); // string

// Assignment operators
let x = 7;
let y, z = 10; // Multiple variables at once
x += 10; // x = 17
x *= 10; // x = 170
x -= 10; // x = 160
x /= 10; // x = 16
x++; // x = x + 1
x--; // x = x - 1

// Comparison operators
console.log(7 > 5); // true
console.log(7 > 10); // false
console.log(7 <= 7); // true

// Basic boolean logic
const boolA = true;
const boolB = true;
const boolC = false;

console.log(!boolA); // = false
console.log(boolA && boolB); // = true
console.log(boolA && boolC); // = false
console.log(boolA || boolC); // = true

/*
TEMPLATE LITERALS
 */
const template = `Name: ${name}, Age: ${age}`;
console.log(template);

// Multiple line template literal
console.log(`String 
with
multiple 
lines`);
/*
IF STATEMENTS
 */
const myAge = 17;
if (myAge >= 18) {
    console.log('A');
} else {
    console.log('B');
}


const favNumber = 8;
if (favNumber === 4) {
    console.log('Your favourite number is 4.')
} else if (favNumber === 8) {
    console.log('8 is also a cool number!')
}

/*
== AND ===
 */
const yourAge = 18;
if (yourAge === yourAge) console.log("You're 18!");

console.log(yourAge === '18'); // false
console.log(yourAge == '18'); // true

console.log(yourAge !== 19); // true

// IMPORTANT: == AND != SHOULD BE AVOIDED!!! USE === AND !== INSTEAD

/*
SWITCH STATEMENT
 */

const day = 'monday';

switch (day) {
    case 'monday':
        console.log("It's monday!");
        break;
    case 'tuesday':
        console.log("It's tuesday");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("It's either wednesday or thursday.");
        break;
    default: {
        console.log("It's not monday, tuesday, wednesday or thursday.");
    }
}

/*
TERNARY OPERATOR
 */
const someonesAge = 18;
someonesAge >= 18 ? console.log('Is 18 or older.') : console.log('Is younger than 18.');

const drink = someonesAge >= 18 ? 'wine' : 'water';
// Can also be used in template literals
console.log(`I like to drink ${someonesAge >= 18 ? 'wine' : 'water'}!!!`)