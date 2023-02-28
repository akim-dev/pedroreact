// import React from "react";
// import "../App.css";
// import { useState } from "react";

// // import uuid
// import { v4 as uuidv4 } from "uuid";

// function TodoPedro() {
//   const [todoList, setTodoList] = useState([]);
//   // State untuk menangkap task baru yang sedang dibuat
//   const [taskBaru, setTaskBaru] = useState("");

//   const handleChange = (e) => {
//     // e.preventDefault();
//     setTaskBaru(e.target.value);
//   };

//   //   kalau dihapus semua akan hilang
//   //   const addTask = () => {
//   //     setTodoList([...todoList, taskBaru]);
//   //   };

//   //   yang bisa dihapus satu satu

//   //   const id = uuidv4();
//   const addTask = () => {
//     const taskTerbaru = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       //   id: id + 1,
//       taskName: taskBaru,
//     };

//     // console.log(todoList.length);
//     console.log(taskTerbaru);
//     setTodoList(taskTerbaru);
//     // setTodoList([...todoList, taskTerbaru]);
//     // console.log(setTodoList([...todoList, taskTerbaru]));
//   };

//   const deleteTask = (list) => {
//     // penjelasan logic
//     // const arr = ["jhon", "pen", "doe"];
//     // const newArr = arr.filter((item) => {
//     //   if (item === "jhon") {
//     //     return false;
//     //   } else {
//     //     return true;
//     //   }
//     // });
//     // setTodoList(newArr);

//     const newTodoList = todoList.filter((item) => {
//       if (item === list) {
//         return false;
//       } else {
//         return true;
//       }
//     });
//     setTodoList(newTodoList);
//   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <input onChange={handleChange} type="text" />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className="list">
//         {todoList.map((list) => {
//           return (
//             <div>
//               <h2>{list}</h2>
//               <button onClick={() => deleteTask(list)}>x</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default TodoPedro;

// import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function CopyPedro() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CopyPedro;
