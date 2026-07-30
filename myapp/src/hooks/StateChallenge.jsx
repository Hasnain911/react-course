import React from "react"
import { useState } from "react"
const StateChallenge = () => {
  const users = [
    { id: 1, name: "Ali", age: 25, city: "Karachi" },
    { id: 2, name: "Sara", age: 28, city: "Lahore" },
    { id: 3, name: "Ahmed", age: 22, city: "Islamabad" },
    { id: 4, name: "Ayesha", age: 30, city: "Peshawar" },
    { id: 5, name: "Bilal", age: 27, city: "Quetta" },
  ]
  const [user, setUser] = useState(users)
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name}, Age: {user.age}, City: {user.city}
          </li>
        ))}
      </ul>
    </>
  )
}

export default StateChallenge
