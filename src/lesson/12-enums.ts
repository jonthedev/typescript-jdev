/*

? Enums

* Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.

* In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.

* In a string enum, TypeScript does not create a reverse mapping. This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.

*/

enum ServerResponseStatus {
  //   Success = "Success",
  //   Error = "Error"
  Success = 200,
  Error = 500
}

Object.values(ServerResponseStatus).forEach(value => {
  console.log(value)
})

Object.values(ServerResponseStatus).forEach(value => {
  if (typeof value === "number") {
    console.log(value)
  }
})

enum NumericEnum {
  Member = 1
}

enum StringEnum {
  Member = "Value"
}

let numericEnumValue: NumericEnum = 1 // This is allowed
console.log(numericEnumValue) // 1

// let stringEnumValue: StringEnum = "Value" //doesn't work

interface ServerResponse {
  result: ServerResponseStatus
  data: string[]
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    // this will not fly with string enum but ok with number
    // result: "Success",
    data: ["first item", "second item"]
  }
}

const response: ServerResponse = getServerResponse()
console.log(response)
