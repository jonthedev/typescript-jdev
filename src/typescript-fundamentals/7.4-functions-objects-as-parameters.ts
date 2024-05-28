/*

? Functions - Using Objects as Function Parameters

*/

function createEmployee({ id }: { id: number }): {
  id: number
  isActive: boolean
} {
  return { id, isActive: id % 2 === 0 }
}

const first = createEmployee({ id: 1 })
const second = createEmployee({ id: 2 })
console.log(first, second)

// alternative
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the class ${student.name.toUpperCase()}!!!`)
}

const newStudent = {
  id: 5,
  name: "anna"
}

createStudent(newStudent)

/*

? Excess Property Checks

* TypeScript only performs excess property checks on object literals where they're used, not on references to them.

* In TypeScript, when you pass an object literal (like { id: 1, name: 'bob', email: 'bob@gmail.com' }) directly to a function or assign it to a variable with a specified type, TypeScript checks that the object only contains known properties. This is done to catch common errors.

* However, when you pass newStudent to createStudent, TypeScript doesn't complain about the email property. This is because newStudent is not an object literal at the point where it's passed to createStudent.

const newStudent = {
  id: 5,
  name: 'anna',
  email: 'anna@gmail.com',
};

createStudent(newStudent); // * valid
createStudent({ id: 1, name: 'bob', email: 'bob@gmail.com' }); // ! invalid

*/
