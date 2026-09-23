import React from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { MdDelete } from "react-icons/md"
const TaskList = (props) => {
  const { handleDeleteTask, currelem, index, handleCompletedTask } = props
  const {id,content,completed} = currelem 
  // const [done,setDone] = React.useState(false)// why this is not recommended? Because we are storing the state in the child component. When we delete a task, the child component is unmounted and the state is lost.

//"If we delete index 0, React remembers that index 0 was done."

//This explanation is correct only when using the array index as the key.

//The deeper, more general reason is:

//completed is part of the task's data, not part of the TaskList component. Even with correct keys, storing it in local state makes the parent unaware of it, prevents saving/filtering/sorting, and separates the state from the data it describes.

//So using object in the parent component is the correct way to do it. The parent component should manage the state of the tasks, including whether they are done or not. This way, when a task is deleted, the state is preserved in the parent component and can be passed down to the child components as props.

return (
  // <li id={index} key={index}>
  //   <span  style={{textDecoration: done ? 'line-through' : 'none'}}>
  //     {currelem}
  //   </span> // Not recommened.

  <li  id = {id}>
    <span style={{ textDecoration: completed ? "line-through" : "none" }}>
      {content}
    </span>

    <div>
      <button>
        <IoMdCheckmarkCircleOutline onClick={()=> handleCompletedTask(currelem)} />
      </button>

      <button onClick={() => handleDeleteTask(currelem)}>
        <MdDelete />
      </button>
    </div>
  </li>
)
}
export default TaskList
