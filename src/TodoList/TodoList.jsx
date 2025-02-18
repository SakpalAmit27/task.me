import React, { useState, useEffect } from "react";

const TodoApp = () => {
    // Initialize from localStorage
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });
    const [input, setInput] = useState("");

    // Add new todo
    const handleAdd = () => {
        if (!input.trim()) return;
        const updated = [...todos, input];
        setTodos(updated);
        setInput("");
    };

    // Save to localStorage on todos change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Delete a todo
    const handleDelete = (index) => {
        const updated = todos.filter((_, i) => i !== index);
        setTodos(updated);
    };


    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
