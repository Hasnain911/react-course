import { useState, useEffect } from "react"
import styles from "./Todo.module.css"
import TodoForm from "./TodoForm"
import TaskList from "./TaskList"
import DateTimeComp from "./DateTimeComp"

const initialData = () => JSON.parse(localStorage.getItem("Task")) || []
// console.log(initialData)

const Todo = () => {
  const [inputvalue, setInputvalue] = useState("")
  const [tasks, setTasks] = useState(initialData) // Lazy initializer

  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(tasks))
  }, [tasks])

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task, i) => {
      return task !== taskToDelete
    })
    setTasks(updatedTasks)
  }
  
  const handleCompletedTask = (currenelem) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === currenelem.id) {
        return {
          ...task,
          completed: !task.completed,
        }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <section className={styles["todo-container"]}>
      <header>
        <h1>Todo List</h1>
        <h2 className={styles.datetime}>
          <DateTimeComp />
        </h2>
      </header>
      <section className={styles["todo-form"]}>
        <TodoForm
          inputvalue={inputvalue}
          setInputvalue={setInputvalue}
          tasks={tasks}
          setTasks={setTasks}
        />
        <section />
        <section>
          <ul>
            {tasks.map((currelem, index) => (
              <TaskList
                key={index}
                handleDeleteTask={handleDeleteTask}
                currelem={currelem}
                handleCompletedTask={handleCompletedTask}
              />
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
