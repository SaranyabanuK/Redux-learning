import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
import { toggleTheme } from "./themeSlice";

const App = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Todo App - Theme: {theme}</h1>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      <br /><br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
