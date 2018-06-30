"use strict"

// STRING METHODS

let theString = 'Hello, my name is Kary and I love JavaScript';

// startsWith() -> boolean
// endsWith() -> boolean
// includes() -> boolean

console.log(theString.startsWith('Hello')); // true
console.log(theString.endsWith('script')); // false
console.log(theString.includes('loves')); // false

// hexadecimal notation
console.log(0xFF);
// binary notation
console.log(0b101011);
// octal notation
console.log(0o543);


// NUMBER METHODS

// isFinite() -> boolean
console.log(Number.isFinite(-3)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false
// isNan() -> boolean
console.log(Number.isNan(NaN)); //true
// isInteger() -> boolean
console.log(Number.isInteger(Infinity)); // false