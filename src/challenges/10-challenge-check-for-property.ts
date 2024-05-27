/*

? Check for property

* The "in" operator in TypeScript is used to narrow down the type of a variable when used in a conditional statement.It checks if a property or method exists on an object. If it exists, TypeScript will narrow the type to the one that has this property.

* Define a function named makeSound that takes one parameter animal of type Animal.

* Inside the function, use an if statement with the in operator to check if the bark method exists on the animal object.

* If the bark method exists on animal, TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.

* If the bark method does not exist on animal, TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.

* Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.

*/

type Dog = { type: "dog"; name: string; bark: () => void }
type Cat = { type: "cat"; name: string; meow: () => void }
type Animal = Dog | Cat

function makeSound(animal: Animal) {
  if ("bark" in animal) {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark()
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow()
  }
}
