/*

? Interface - Methods

*/

interface Book2 {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  // method
  printAuthor(): void
  printTitle(message: string): string
}

const deepWork2: Book2 = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author)
  },
  printTitle(message) {
    return `${this.title} ${message}`
  }
}
deepWork2.printAuthor()
const result1 = deepWork2.printTitle("is an awesome book")
console.log(result)
