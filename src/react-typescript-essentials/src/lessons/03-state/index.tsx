/*

* typescript infers primitive types
* by default [] is type never

*/

import { useState } from "react"

function Component() {
  const [text, setText] = useState("shakeAndBake")
  const [number, setNumber] = useState(1)
  const [list, setList] = useState<string[]>([])

  return (
    <div>
      <h2 className="mb-1">hello from typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          // setText(1);
          // setNumber('hello');
          // setList([1, 3]);
          setList(["hello", "world"])
        }}
      >
        click me
      </button>
    </div>
  )
}
export default Component
