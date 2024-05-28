import Component from "./lessons/02-props/"

function App() {
  return (
    <main>
      <Component name="peter" id={123}>
        <p>some text</p>
      </Component>
    </main>
  )
}

export default App
