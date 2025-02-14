

const TodoList = ({todos,setTodos}) => { // destructuring the props // 

    // as mentioned it is for displaying the list // 

  return (
    <div>
        {/*Displaying the todo */}
        {todos.map((todos,i) => (
          <div key={i}>
            {todos}
          </div>
        ))}
    </div>
  )
}

export default TodoList
