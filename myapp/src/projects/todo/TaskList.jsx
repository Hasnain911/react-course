import React from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { MdDelete } from "react-icons/md"
const TaskList = (props) => {
  const { handleDeleteTask, currelem, index } = props
  const [done,setDone] = React.useState(false)


return (
  <li id={index} key={index}>
    <span  style={{textDecoration: done ? 'line-through' : 'none'}}>
      {currelem}
    </span>

    <div>
      <button>
        <IoMdCheckmarkCircleOutline onClick={() => setDone(!done)} />
      </button>

      <button onClick={() => handleDeleteTask(currelem)}>
        <MdDelete />
      </button>
    </div>
  </li>
)
}
export default TaskList
