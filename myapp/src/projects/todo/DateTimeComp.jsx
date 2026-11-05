import { useState, useEffect } from "react"

const DateTimeComp = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [date, setDate] = useState(new Date().toLocaleDateString())


  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date() //now is a Date object representing the current date and time.This ensures both the time and date come from the same exact moment and avoids creating two separate Date objects.
      setTime(now.toLocaleTimeString())
      setDate(now.toLocaleDateString())
    }, 1000)

    // console.log("papa") // To check if the useEffect is running every second or just once.
    return () => clearInterval(id)
  }, [])


  return (
    <>
      <div>{time} - {date}</div>

    </>
  )
}

export default DateTimeComp
