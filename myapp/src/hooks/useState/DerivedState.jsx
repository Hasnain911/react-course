import React from "react"
import { useState } from "react"
const DerivedState = () => {
  const UsersList = [
    { id: 1, name: "Ali", age: 2, city: "Karachi" },
    { id: 2, name: "Sara", age: 2, city: "Lahore" },
    { id: 3, name: "Ahmed", age: 2, city: "Islamabad" },
    { id: 4, name: "Ayesha", age: 2, city: "Peshawar" },
    { id: 5, name: "Bilal", age: 2, city: "Quetta" },
    { id: 6, name: "Zainab", age: 4, city: "Faisalabad" },
  ]
  const [users, setUsers] = useState(UsersList)
  const count = users.length
  const averageAge = users.reduce((acc, user) => acc + user.age, 0) / count
  const UpdatedUsers = () => setUsers(users.slice(0,-1))
  console.log(users);
  
  return (
    <>
      <h1> No. of Users : {count}</h1>
      {/* Derived values: count and averageAge are calculated from the users state. */}
      <h1>Average age :{averageAge}</h1>
      {/* <button onClick={() => setUsers(users.filter((user) => user.id !== 6))}>
        Delete User
      </button> */}
      <button onClick = {UpdatedUsers}>
        Delete User
      </button>
    </>
  )
}

export default DerivedState

// users is the source of truth. count and averageAge are not stored in state. They are calculated from the users state every time the component renders. That's why they are called derived state (or derived values).

// If you can calculate it from existing state or props, don't put it in useState. Derive it instead.
