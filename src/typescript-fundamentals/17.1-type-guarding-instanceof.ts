/*

? Type Guard - instanceof

* The instanceof type guard is a way in TypeScript to check the specific class or constructor function of an object at runtime. It returns true if the object is an instance of the class or created by the constructor function, and false otherwise.

*/

try {
  // Some code that may throw an error
  throw new Error("This is an error")
} catch (error) {
  if (error instanceof Error) {
    console.log("Caught an Error object: " + error.message)
  } else {
    console.log("Caught an unknown error")
  }
}
