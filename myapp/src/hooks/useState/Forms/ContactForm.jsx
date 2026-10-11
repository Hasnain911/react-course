import { useState } from "react"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return(
  <>
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">First Name</label>
        <input
          onChange={handleChange}
          id="username"
          type="text"
          placeholder="Enter First Name"
          name="username"
          value={formData.username}
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
          value={formData.email}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          onChange={handleChange}
          id="message"
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          rows={5}
          required
        />

        <div className="clearfix">
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </>
)}
export default ContactForm
