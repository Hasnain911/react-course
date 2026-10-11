import React, { useEffect } from "react"
import "./UseEffectChallenge.css"
import { useState } from "react"

const UseEffectChallenge = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")



  useEffect(() => {
    console.log(`useEffect called: ${name}`)
  }, [name])


  useEffect(() => {
  document.title = `Count: ${count}`
  }, [count])



  const handleClick = () => {
    setCount(count + 1)
  }


  const handleNameChange = (event) => {
    const { value } = event.target
   setName(value);  // Schedules a state update
// console.log(name); // Reads the current render's state

// The process is:

// 1. setName(value) → React schedules the update.
// 2. The event handler finishes executing.
// 3. React renders the component with the updated state.
// 4. The new render gets the updated name value.
// Remember: setName(value) doesn't change name in the currently running function. It schedules an update for a future render.
  }
  // console.log(`Current name: ${name}`);
 // Logs the state value belonging to the current render.
// Runs on every render, even if name hasn't changed.
// Test this by clicking Increment. If you want to log specifically when name changes, use: useEffect() Hook.

  return (
    <div className="challenge-container">
      <div className="challenge-card">
        <h1>UseEffectChallenge</h1>

        <p className="count">Count: {count}</p>

        <button className="increment-btn" onClick={handleClick}>
          Increment
        </button>

        <p className="name">Name: {name}</p>

        <input
          type="text"
          placeholder="Enter your name..."
          className="name-input"
          value={name}
          onChange={handleNameChange}
        />
      </div>
    </div>
  )
}

export default UseEffectChallenge
