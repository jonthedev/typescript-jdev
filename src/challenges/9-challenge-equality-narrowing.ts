/*

? Equality Narrowing

* In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code

* Define a function named makeSound that takes one parameter animal of type Animal.

* Inside the function, use an if statement to check if animal.type is 'dog'.

* If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.

* If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.

* Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.

*/

type Dog = {
  type: "dog"
  name: string
  bark: () => void
}

type Cat = {
  type: "cat"
  name: string
  meow: () => void
}

type Animal = Dog | Cat

function makeSound(animal: Animal) {
  if (animal.type === "dog") {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark()
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow()
  }
}
