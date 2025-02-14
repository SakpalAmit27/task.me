import { useState } from "react"

import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";


const App = () => {

  const [todo,setTodo] = useState([]);
  return (
    <div>
      task.me

      <TodoList todo={todo} setTodo={setTodo}/> 
      <AddTodo setTodo={setTodo}/>

    </div>
  )
}

export default App
