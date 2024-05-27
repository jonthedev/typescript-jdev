/*

? Utility Type - Pick

* Used to create a new type by picking some of the properties from the given Type based on the keys specified in the Keys parameter, with the help of this we can create a new object with some certain properties that belongs to the existing object.

*/

/* Define an interface called "Person"
that has three properties: name, age,
and address, all with their respective
data types */

interface Person {
  name: string
  age: number
  address: string
}

/* Define a type called "NameAndAge" that is
created by picking the "name" and "age"
properties from the "Person" interface */
type NameAndAge = Pick<Person, "name" | "age">

/* Declare a constant "person" that is of
type "NameAndAge" and has the values
of "name" and "age" properties */
const person: NameAndAge = { name: "John", age: 30 }

/* Output the value of the "person" constant
to the console */
console.log(person)
