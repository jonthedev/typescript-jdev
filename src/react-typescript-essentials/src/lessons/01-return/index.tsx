/*

* By default TypeScript infers JSX.Element on the return type.

*/

// * set function return type
function Component(): JSX.Element | null | string {
  return null
  return "hello"
  return <h2>hello from typescript</h2>
}
export default Component
