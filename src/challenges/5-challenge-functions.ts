/*

* Create a new array of names.

* Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.

* Use this function to check if various names are in your array and log the results.

*/

const names = ["Jonathan", "Ben", "Sarah", "Jack"]

const isNameInList = (name: string): boolean => {
  return names.includes(name)
}

let nameToCheck: string = "Jane"

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`)
} else {
  console.log(`${nameToCheck} is not in the list.`)
}
