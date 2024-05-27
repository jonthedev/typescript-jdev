/*

? Discriminated Unions and exhaustive check using the never type

* A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.

*/

type IncrementAction = {
  type: "increment"
  amount: number
  timestamp: number
  user: string
}

type DecrementAction = {
  type: "decrement"
  amount: number
  timestamp: number
  user: string
}

/*

* Write a reducer function that takes the current state and an action, and returns the new state. The reducer function should use a switch statement or if-else chain on the type property of the action to handle each action type differently.

* In the default case of the switch statement or the final else clause, perform an exhaustive check by assigning the action to a variable of type never. If there are any action types that haven't been handled, TypeScript will give a compile error.

* Implement the logic for each action type in the reducer function. This typically involves returning a new state based on the current state and the properties of the action.

* Use the reducer function in your application to handle actions and update the state.

*/

type Action = IncrementAction | DecrementAction

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + action.amount
    case "decrement":
      return state - action.amount

    default:
      const unexpectedAction: never = action
      throw new Error(`Unexpected action: ${unexpectedAction}`)
  }
}

const newState = reducer(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456
})

console.log(newState)
