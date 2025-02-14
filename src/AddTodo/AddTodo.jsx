import { useState } from "react"

// as mentioned , a component to add the task //


const AddTodo = ({setTodos}) => {

  const [task,setTask] = useState("");


  // function to add the task // 

  const addTask = () => {
    if(task.trim() === "") return; // this will prevent empty todo // 


    setTodos(prevTodos => [...prevTodos,task])

    setTask("") // clears the input //
  }
  return (
    <div>
      AddTodo Component
    </div>
  )
}

export default AddTodo
