/*

? Interface - Methods (more options)

* It's generally a good practice to match the structure of the interface and the implementing object or class as closely as possible. This makes the code easier to understand and maintain. So, if printAuthor is defined as a method in the Book3 interface, it would be more consistent to implement it as a method in the deepWork object.

*/

interface Book {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  // method
  printAuthor(): void
  printTitle(message: string): string
  printSomething: (someValue: number) => number
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author)
  },
  printTitle(message) {
    return `${this.title} ${message}`
  },
  // first option
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // second option
  printSomething: someValue => {
    // "this" gotcha
    console.log(deepWork.author)
    return someValue
  }
  // third option
  // printSomething(someValue) {
  //   return someValue;
  // },
  // alternative
  // printAuthor: () => {
  //   console.log(deepWork.author);
  // },
}
console.log(deepWork.printSomething(34))

deepWork.printAuthor()
// const result3 = deepWork3.printTitle("is an awesome book")
// console.log(result3)
