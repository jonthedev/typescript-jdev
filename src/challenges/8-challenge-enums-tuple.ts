/*

* Define an enum named UserRole with members Admin, Manager, and Employee.

* Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).

* Define a function named createUser that takes a User object as its parameter and returns a User object.

* Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.

*/

enum UserRole {
  Admin,
  Manager,
  Employee
}

type User1 = {
  id: number
  name: string
  role: UserRole
  contact: [string, string] // [email, phone]
}

function createUser(user: User1): User1 {
  return user
}

// Call the createUser function
const user: User1 = createUser({
  id: 1,
  name: "John Doe",
  role: UserRole.Admin,
  contact: ["john.doe@example.com", "123-456-7890"]
})

console.log(user)
