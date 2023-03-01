import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleAdd(text) {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  }

  function handleToggle(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <AddTodo onAdd={handleAdd} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => handleToggle(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

function TodoItem({ text, completed, onToggle, onDelete }) {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoList;
