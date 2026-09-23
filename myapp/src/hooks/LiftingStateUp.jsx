import React from "react"
import { useState } from "react"
import "../components/card.css"
const LiftingStateUp = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <Child1
      id ="child1"
        active={hovered === "child1"}
        setHovered={setHovered}
        onMouseLeave={() => setHovered(null)}
      />
      <Child2
        id ="child2"
        active={hovered === "child2"}
        setHovered={setHovered}
        onMouseLeave={() => setHovered(null)}
      />
    </>
  )
}


const Child1 = (props) => {
  const { id, active, setHovered, onMouseLeave } = props

  return (
    <>
      <h1 id={id}
        className={active ? "h-world-active" : "h-world"}
        onMouseEnter={() => setHovered(id)}
        onMouseLeave={onMouseLeave}
      >
        Child1 Component
      </h1>
    </>
  )
}
const Child2 = (props) => {
  const { id, active, setHovered, onMouseLeave } = props

  return (
    <>
      <h1 id={id}
        className={active ? "h-world-active" : "h-world"}
        onMouseEnter={() => setHovered(id)}
        onMouseLeave={onMouseLeave}
      >
        Child2 Component
      </h1>
    </>
  )
}
export default LiftingStateUp
