import { useState , useId } from "react"
const  UseId = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
 const id = useId()
 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Username:", username)
    console.log("Password:", password)
  }
  return (
    <>
      <div className="container">
        <h1>Sign In</h1>
        <p>Please fill in this form to access your account</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor={`${id}-username`}>First Name</label>
          <input
            onChange={handleUsernameChange}
            id={`${id}-username`}
            type="text"
            placeholder="Enter First Name"
            name="username"
            value={username}
            autoComplete="off"
            required
          />
          <label htmlFor={`${id}-password`}>Last Name</label>
          <input
            onChange={handlePasswordChange}
            id={`${id}-password`}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            autoComplete="new-password"
            required
          />
          <div className="clearfix">
            <button type="submit" className="btn">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default UseId
