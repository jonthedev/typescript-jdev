type Car = {
  brand: string
  model: string
}

const car: Car = {
  brand: "ford",
  model: "mustang"
}

type Product = {
  name: string
  price: number
}

const product: Product = {
  name: "shoes",
  price: 1.99
}

type Student = {
  name: string
  age: number
}

const student: Student = {
  name: "peter",
  age: 20
}

// *  T extends Student is a type constraint on the generic type T. It means that the type T can be any type, but it must be a subtype of Student or Student itself. In other words, T must have at least the same properties and methods that Student has.

// function printName<T extends Student>(input: T): void {
//   console.log(input.name)
// }

// printName(student)

// function printName<T extends Student | Product>(input: T): void {
//   console.log(input.name)
// }

// printName(product)

function printName<T extends { name: string }>(input: T): void {
  console.log(input.name)
}

printName(student)
printName(product)
