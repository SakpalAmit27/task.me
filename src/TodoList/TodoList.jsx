import { useState } from "react"


const TodoList = ({todos,setTodos}) => { // destructuring the props // 

    // as mentioned it is for displaying the list // 


    // -- preparing for update operation's -- // 


    const [editIndex,setEditIndex] = useState(null); 
    const [editText , setEditText] = useState('');

    const handle_edit = (index,text) => {
      setEditIndex(index);
      setEditText(text);
    }


    const handle_save = () => {

      const updatedTodo = todos.map((item,index) => (

        index === editIndex ? editIndex : item
      ));


      setTodos(updatedTodo);

      setEditIndex(null) 

      setEditIndex('');
    }



    

  return (
    <div>
        {/*Displaying the todo */}
        {todos. map((todos,i) => (
          <div key={i}>
            {todos}
          </div>
        ))}
    </div>
  )
}

export default TodoList
