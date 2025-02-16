import { useState } from "react";

const TodoList = ({ todos, setTodos }) => {
  const [selectedIndex, editSelectedIndex] = useState(null);
  const [selectedText, editSelectedText] = useState("");

  const handleEdit = (text, index_of_list) => {
    editSelectedText(text);
    editSelectedIndex(index_of_list);
  };

  const handleUpdate = () => {
    const updatedList = todos.map((text, index) =>
      index === selectedIndex ? selectedText : text
    );

    setTodos(updatedList);
    editSelectedIndex(null);
    editSelectedText("");
  };


  const handleDelete = (index_to_delete) => {

    const updatedList = todos.filter((_,index) => index != index_to_delete);


    setTodos(updatedList);
  }
  return (
    <div>
      {todos.map((list, index_of_the_list) => (
        <div key={index_of_the_list}>
          {selectedIndex === index_of_the_list ? (
            <>
              <input
                type="text"
                value={selectedText}
                onChange={(e) => editSelectedText(e.target.value)}
              />
              <button onClick={handleUpdate}>Save</button>
            </>
          ) : (
            <>
              {list}
              <button onClick={() => handleEdit(list, index_of_the_list)}>
                Edit
              </button>
              
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
