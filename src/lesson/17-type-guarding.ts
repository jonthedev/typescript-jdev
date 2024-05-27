/*

? Type Guarding

* Type guarding is a term in TypeScript that refers to the ability to narrow down the type of an object within a certain scope. This is usually done using conditional statements that check the type of an object.

* In the context of TypeScript, a type guard is some expression that performs a runtime check that guarantees the type in some scope.

*/

type ValueType = string | number | boolean

let value: ValueType
const random = Math.random()
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true

function checkValue(value: ValueType) {
  if (typeof value === "string") {
    console.log(value.toLowerCase())
    return
  } else if (typeof value === "number") {
    console.log(value.toFixed(2))
  } else {
    console.log(`boolean: ${value}`)
  }
}
checkValue(value)
