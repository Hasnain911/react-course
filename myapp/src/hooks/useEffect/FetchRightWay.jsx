import { useState, useEffect } from "react"

export const FetchRightWay = () => {
  const [users, setUsers] = useState([])
  // Har render par API call hogi
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUsers(data)
        })
  }, [])

  return (
    <>
      <ul>
        {users.map((currelem) => (
          <li key={currelem.id}>Name:{currelem.name}</li>
        ))}
      </ul>
    </>
  )
}
