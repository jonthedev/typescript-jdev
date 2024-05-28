import { useTheme, ThemeProvider } from "./context"

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}

function Component() {
  const context = useTheme()
  console.log(context)

  return (
    <div>
      <h2>Context API</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          if (context.theme === "dark") {
            context.setTheme("system")
            return
          }
          context.setTheme("dark")
        }}
      >
        Toggle Theme
      </button>
    </div>
  )
}
export default ParentComponent
