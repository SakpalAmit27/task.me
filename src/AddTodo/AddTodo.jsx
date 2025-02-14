import { useState } from "react"


const AddTodo = ({setTodos}) => {

  const [task,setTask] = useState("");


  // function to add the task // 

  const addTask = () => {
    if(task.trim() === "") return; // this will prevent empty todo // 
  }
  return (
    <div>
      AddTodo Component
    </div>
  )
}

export default AddTodo
