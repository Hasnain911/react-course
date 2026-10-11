import React from "react"
import { useState } from "react"

const GrandParent = () => {

  {
    console.log("Grand Parent Component Render")
  }
  return (
    <>
      <Parent />
      <Sibling />
    </>
  )
}

const Parent = () => {
    const [count, setCount] = useState(0)
  console.log("Parent Component Render")

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1> Parent render {count} number of times </h1>
      <Child />
    </>
  )
}
const Child = () => {
  console.log("Child Component Render")

  return (
    <>
      <h1>Child Component</h1>
    </>
  )
}

const Sibling = () => {
  console.log("Sibling Component Render")

  return (
    <>
      <h1>Sibling Component</h1>
    </>
  )
}

export default GrandParent
