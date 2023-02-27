import React from "react";
import "../App.css";
import { useState } from "react";

function TodoPedro() {
  const [todoList, setTodoList] = useState([]);
  // State untuk menangkap task baru yang sedang dibuat
  const [taskBaru, setTaskBaru] = useState("");

  const handleChange = (e) => {
    // e.preventDefault();
    setTaskBaru(e.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, taskBaru];
    setTodoList(newTodoList);
  };

  const deleteTask = (list) => {
    // penjelasan logic
    // const arr = ["jhon", "pen", "doe"];
    // const newArr = arr.filter((item) => {
    //   if (item === "jhon") {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
    // setTodoList(newArr);

    const newTodoList = todoList.filter((item) => {
      if (item === list) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} type="text" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((list) => {
          return (
            <div>
              <h2>{list}</h2>
              <button onClick={() => deleteTask(list)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoPedro;
