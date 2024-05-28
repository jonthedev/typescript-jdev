/*

? Utility type - Omit

* We can use it when, let’s say there exists a type already but we want to create a new type that must contain only a few properties, and with the help of Omit, we will be able to exclude the unnecessary properties.

*/

/* Define an interface Person with three
properties: name, age, and address */
interface Person {
  name: string
  age: number
  address: string
}

/* Define a new type NameAndAge using the Omit
utility type to exclude the address property
from the Person interface */
type NameAndAge = Omit<Person, "address">

/* Declare a constant called person with
the NameAndAge type and assign it a
value of { name: 'John', age: 30 } */
const person: NameAndAge = {
  name: "John",
  age: 30
}

/* Log the person constant to the
console to see the output */
console.log(person)

/* ------------------------------------------------- */

/* Define an interface called Book with four
properties: id, title, author, and price */
interface MyBook {
  id: number
  title: string
  author: string
  price: number
}

/* Define a function called getBookDetails
that accepts a book of type Omit<Book, 'id' | 'price'>
and returns a string */
function getBookDetails(book: Omit<MyBook, "id" | "price">): string {
  return `Title: ${book.title}, Author: ${book.author};`
}

/* Declare a constant called book of type
Book and assign it an object with values
for id, title, author, and price */
const book: MyBook = {
  id: 123,
  title: "The Alchemist",
  author: "Paulo Coelho",
  price: 15.99
}

/* Call the getBookDetails function with the book
constant as an argument and store the result in
a constant called bookDetails */
const bookDetails = getBookDetails(book)

/* Log the bookDetails constant to the console,
which will output "Title: The Alchemist,
Author: Paulo Coelho" */
console.log(bookDetails)
