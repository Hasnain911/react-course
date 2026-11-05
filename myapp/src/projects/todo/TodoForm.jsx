import styles from './Todo.module.css'
const TodoForm = (props) => {
    const { inputvalue, setInputvalue, tasks, setTasks } = props
    const handleInputChange = (e) => {
        setInputvalue(e.target.value)
      }
      const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!inputvalue.trim()) return //If inputvalue is empty or contains only spaces, stop the function immediately.
        // if (tasks.includes(inputvalue)) {
        //   setInputvalue("")
        //   return // using some coz we have an array of ob not string.
        if (tasks.some((task) => task.content === inputvalue.trim())) {
  setInputvalue("")
  return

        } //If the task already exists in the tasks array, stop the function immediately.
        setTasks([...tasks, { id: inputvalue, content: inputvalue, completed: false }])
         setInputvalue("")
      }
    
   
  return (
 <form  onSubmit={handleFormSubmit}>
           <input
             className={styles["todo-input"]}
             value={inputvalue} //the value prop keeps the input synchronized with that state.
             onChange={handleInputChange}
             type="text"
             placeholder="Add a new task"
             autoComplete="off"
           />
           <button className={styles["clear-btn"]} type="submit">
             Add Task
           </button>
         </form>
  )
}

export default TodoForm