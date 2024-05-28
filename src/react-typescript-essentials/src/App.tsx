/*

* When you provide the exact HTML element type in the angle brackets (<>), like HTMLInputElement in your case, you're telling TypeScript exactly what kind of element the event is coming from.

* This helps TypeScript provide accurate suggestions and error checking based on the properties and methods that are specific to that kind of element. For example, an HTMLInputElement has properties like value and checked that other elements don't have.

* By specifying the exact element type, TypeScript can help you avoid mistakes and write safer code.

*/

import Component from "./lessons/05-challenge"

function App() {
  return (
    <main>
      <Component type="basic" name="susan" />
      <Component type="advanced" name="anna" email="anna@gmail.com" />
    </main>
  )
}

export default App
