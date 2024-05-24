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
