/*

* Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

* Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

* Create a Union Type: Define a type Staff that is a union of Employee and Manager.

* Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

* Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

* Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

*/

type Employee = {
  id: number
  name: string
  department: string
}

type Manager = {
  id: number
  name: string
  employees: Employee[]
}

type Staff = Employee | Manager

function printStaffDetails(staff: Staff) {
  "employees" in staff
    ? console.log(
        `The manager ${staff.name} manages ${staff.employees.length} employees.`
      )
    : console.log(
        `The employee ${staff.name} belongs to the ${staff.department} department.`
      )
}

const alice: Employee = {
  id: 1,
  name: "Alice",
  department: "R & D"
}
const steve: Employee = {
  id: 2,
  name: "Steve",
  department: "Marketing"
}

const bob: Manager = {
  id: 1,
  name: "Bob",
  employees: [alice, steve]
}

printStaffDetails(alice)
printStaffDetails(bob)
