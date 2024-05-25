/*

? Interface Fundamentals

* allow to setup shape for objects (only objects)

*/

interface BookInterface {
  readonly isbn: number
  title: string
  author: string
  genre?: string
}

const deepWork: BookInterface = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help"
}

deepWork.title = "New Title" // allowed
// deepWork.isbn = 654321; // not allowed
