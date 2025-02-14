import { useState } from "react"

import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";


const App = () => {

  const [todos,setTodos] = useState([]);
  return (
    <div>
      task.me

      <TodoList todos={todos} setTodos={setTodos}/> 
      <AddTodo setTodos={setTodos}/>

    </div>
  )
}

export default App
