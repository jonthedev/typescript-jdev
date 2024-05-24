/*

? Type Annotations

* TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties.

*/

let awesomeName: string = "shakeAndBake"
awesomeName = "something"
awesomeName = awesomeName.toUpperCase()
// awesomeName = 20;

console.log(awesomeName)

let amount: number = 12
amount = 12 - 1
// amount = 'pants';

let isAwesome: boolean = true
isAwesome = false
// isAwesome = 'shakeAndBake';

// ? Practical Application of Type Annotation

const books = ["1984", "Brave New World", "Fahrenheit 451"]

let foundBook: string | undefined

for (let book of books) {
  console.log("loop running")
  if (book === "1984") {
    foundBook = book
    foundBook = foundBook.toUpperCase()
    break
  }
}

console.log(foundBook?.length)
