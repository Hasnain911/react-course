import React from "react"
import { useState } from "react"
import "../components/card.css"
const LiftingStateUp = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <Child
      id ="child1"
        active={hovered === "child1"}
        setHovered={setHovered}
        onMouseLeave={() => setHovered(null)}
      />
      <Child
        id ="child2"
        active={hovered === "child2"}
        setHovered={setHovered}
        onMouseLeave={() => setHovered(null)}
      />
    </>
  )
}

const Child = (props) => {
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

export default LiftingStateUp
