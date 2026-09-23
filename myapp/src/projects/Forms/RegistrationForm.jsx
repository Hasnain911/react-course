import React from "react"
import { useState } from "react"
import "./index.css"

const RegistrationForm = () => {
  const [user, setUser] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevUser) => ({ ...prevUser, [name]: value }))//means : Create a new object by copying prevUser, then update the property whose name is stored in name with value.
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }
 

  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account</p>
        <form onSubmit={handleSubmit}> 
          <label htmlFor="username">First Name</label>
          <input
            onChange={handleChange}
            id="username"
            type="text"
            placeholder="Enter First Name"
            name="username"
            value={user.username}
            required
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            onChange={handleChange}
            id="lastname"
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            value={user.lastname}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter Email"
            name="email"
            autoComplete="email"
           value={user.email}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={user.password}
            autoComplete="new-password"
          />
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            onChange={handleChange}
            id="phonenumber"
            type="tel"
            placeholder="Enter Phone Number"
            name="phonenumber"
            value={user.phonenumber}
            required
          />
          <div className="clearfix">
            <button type="submit"  className="btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegistrationForm
