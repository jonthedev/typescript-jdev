/*

? Classes - Shorthand Syntax

* In TypeScript, if you want to use the shorthand for creating and initializing class properties in the constructor, you need to use public, private, or protected access modifiers.

*/

class Book {
  private checkedOut: boolean = false
  constructor(
    public readonly title: string,
    public author: string,
    private someValue: number
  ) {}
  public getSomeValue() {
    return this.someValue
  }
}

const deepWork = new Book("Deep Work", "Cal Newport", 45)
console.log(deepWork.getSomeValue())
