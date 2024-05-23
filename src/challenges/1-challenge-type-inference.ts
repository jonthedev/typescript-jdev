/*

* Create a variable of type string and try to invoke a string method on it.

* Create a variable of type number and try to perform a mathematical operation on it.

* Create a variable of type boolean and try to perform a logical operation on it.

* Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.

* You can use type annotation or inference

*/

// 1. String
let greeting: string = "Hello, TypeScript!"
greeting = greeting.toUpperCase() // This should work fine

// 2. Number
let age: number = 25
age = age + 5 // This should work fine

// 3. Boolean
let isAdult: boolean = age >= 18
isAdult = !isAdult // This should work fine

// ! even with error you can run the project but you won't be able to build it "npm run build"

// 4. Assigning different types
// Uncommenting any of these will result in a TypeScript error
// greeting = 10; // Error: Type 'number' is not assignable to type 'string'
// age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'
// isAdult = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'
