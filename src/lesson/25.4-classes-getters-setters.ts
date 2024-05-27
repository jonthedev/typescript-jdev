/*


? Classes - Getters and Setters

* Getters and setters are special methods in a class that allow you to control how a property is accessed and modified.They are used like properties, not methods, so you don't use parentheses to call them.

*/

class Book {
  private checkedOut: boolean = false
  constructor(public readonly title: string, public author: string) {}
  get info() {
    return `${this.title} by ${this.author}`
  }

  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut
  }
  get checkOut() {
    return this.checkedOut
  }
  public get someInfo() {
    this.checkOut = true
    return `${this.title} by ${this.author}`
  }
}

const deepWork = new Book("deep work", "cal newport")
console.log(deepWork.info)
// deepWork.checkOut = true;
console.log(deepWork.someInfo)
console.log(deepWork.checkOut)
