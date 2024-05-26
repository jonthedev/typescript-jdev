/*

* Define the Person interface Start by defining a Person interface with a name property of type string.

* Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.

* Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.

* Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.

* Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.

*/

// Define the Person interface
interface Person {
  name: string
}

// Define the DogOwner interface
interface DogOwner extends Person {
  dogName: string
}

// Define the Manager interface
interface Manager extends Person {
  managePeople: () => void
  delegateTasks: () => void
}

// Create a variable called employee and log it to the console
const employee: Person | DogOwner | Manager = getEmployee()

// Define the getEmployee function
function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random()

  if (random < 0.33) {
    return { name: "John" } as Person
  } else if (random < 0.66) {
    return { name: "Sarah", dogName: "Rex" } as DogOwner
  } else {
    return {
      name: "Bob",
      managePeople: () => console.log("Managing people..."),
      delegateTasks: () => console.log("Delegating tasks...")
    } as Manager
  }
}

console.log(employee)

/*

* A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.

*/

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return "managePeople" in obj
}

if (isManager(employee)) {
  employee.delegateTasks()
}

console.log(isManager(employee))
