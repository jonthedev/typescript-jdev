/*

? Functions - "void" return type

* In TypeScript, void is a special type that represents the absence of a value. When used as a function return type, void indicates that the function does not return a value.

*/

function logMessage(message: string): void {
  console.log(message)
}

logMessage("Hello, TypeScript!") // Output: Hello, TypeScript!
