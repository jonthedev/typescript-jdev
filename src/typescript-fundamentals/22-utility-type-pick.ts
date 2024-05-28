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

/* ---------------------------------------------- */

/* This is an interface called User which
defines the properties of a user object */
interface MyUser {
  id: number
  username: string
  email: string
  password: string
}

/* This is a function called getUserDetails
which takes a user object with only the
username and email properties and returns
a string that contains the username and email */
function getUserDetails(user: Pick<MyUser, "username" | "email">): string {
  return `Username: ${user.username},
          Email: ${user.email};`
}

/* This is a user object that has all the
properties defined in the User interface */
const user: MyUser = {
  id: 123,
  username: "johndoe",
  email: "johndoe@example.com",
  password: "password123"
}

/* This calls the getUserDetails function
with the user object as an argument
The result is stored in a constant called
userDetails */
const userDetails = getUserDetails(user)

// This logs the userDetails string to the console
console.log(userDetails)
