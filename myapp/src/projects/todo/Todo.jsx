import React from "react"
import { useState } from "react"
import styles from "./Todo.module.css"


import { useEffect } from "react"
import TodoForm from "./TodoForm"
import TaskList from "./TaskList"

const Todo = () => {
  const [inputvalue, setInputvalue] = useState("")
  const [tasks, setTasks] = useState([])
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
    const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task, i) => {
      return task !== taskToDelete
    })
    setTasks(updatedTasks)
  }


  return (
    <section className={styles["todo-container"]}>
      <header>
        <h1>Todo List</h1>
        <h2 className={styles.datetime}>
          {date} - {time}
        </h2>
      </header>
      <section className={styles["todo-form"]}>
       <TodoForm  inputvalue = {inputvalue} setInputvalue= {setInputvalue} tasks={tasks} setTasks={setTasks} />
       <section/>
        <section>
          <ul>
            {tasks.map((currelem, index) => (
    <TaskList key={index} handleDeleteTask={handleDeleteTask} currelem = {currelem} index = {index}/>
            ))}
          </ul>
          <section className={styles["clear-btn"]}>
            <button
              className={styles["clear-btn"]}
              onClick={() => setTasks([])}
            >
              Clear All Tasks
            </button>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Todo

//Put onSubmit on the <form>, put the button inside the form, and give the button type="submit" so that both clicking the button and pressing Enter trigger the same submit handler.

// Here's what each part does:

// ✅ onSubmit={handleFormSubmit} → Tells React what to do when the form is submitted.
// ✅ <button type="submit"> → Makes the button submit the form.
// ✅ Button inside the <form> → Associates the button with that form.
