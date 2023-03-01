import React from "react";
import { useState } from "react";

function PedroTodoNulis() {
  // menampung todo
  const [todoList, setTodoList] = useState([]);

  //   state untuk menampung input
  const [newTask, setTask] = useState("");

  //   event handler untuk menangkap input
  const kasihInputHandler = (event) => {
    setTask(event.target.value);
  };

  //   add new task ke todo list
  const addTask = () => {
    // contoh pemahaman
    const todoBaru = [...todoList, newTask];
    // kita buat array baru dengan menangkap semua todo yang sudah ada dengan spread operator ... todoList dan ditambah task baru dengan nama newtask

    // selanjutnya kita masukan variable todoBaru ke dalam setTodoList sehingga dalam state todoList berubah atau bertambah dengan newtask
    setTodoList(todoBaru);
    // update mengenai todo list bisa diambil dari state todoList
    console.log(todoList);

    // atau kode diatas bisa di persingkat dengan langsung memasukkna spread operator kedalam setTodoList
    // setTodoList([...todoList, newTask]);
  };

  return (
    <div className="App">
      {/* awal input */}
      <div className="addTask">
        <input type="text" onChange={kasihInputHandler} />
        <button onClick={addTask}>Add Task</button>
      </div>
      {/* akhir input */}
      {/* ******************************************************************************** */}
      {/* display todo */}
      <div className="list">
        {/* mengiterasi loop yang ada dalam todoList dengan method map() */}
        {/* {newTask} */}
        {todoList.map((todoSatuSaja) => {
          return (
            <div>
              <h2>{todoSatuSaja}</h2>
              <button>x</button>
            </div>
          );
        })}
      </div>
      {/* akhir todo */}
    </div>
  );
}

export default PedroTodoNulis;
