/*

* Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.

* Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.

* Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.

*/

const temperatures = [1, 45, 31, 22, 16]
//temperatures.push('50') This will result in a TypeScript error

const colors: string[] = ["red", "blue", "green"]
//colors.push(true) This will result in a TypeScript error

const mixedArray: (number | string)[] = [5, "hello", "blue"]
//mixedArray.push(true) This will result in a TypeScript error
