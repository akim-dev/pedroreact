import React from "react";
import { useState } from "react";

function BelajarState() {
  // const [update,setUpdate] = useState(0);
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    if (count === 50) {
      setCount(50);
    } else {
      setCount(count + 1);
    }
  };

  const handleMinus = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div
      style={{
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "50vw",
        backgroundColor: "black",
        color: "white",
        padding: "20px",
      }}
    >
      <h1>Belajar State</h1>

      <button
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "50px",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "10px",
          cursor: "pointer",
        }}
        onClick={handlePlus}
      >
        +
      </button>

      <h4
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "10px",
        }}
      >
        {count}
      </h4>
      <button
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "50px",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "10px",
          cursor: "pointer",
        }}
        onClick={handleMinus}
      >
        -
      </button>
    </div>
  );
}

export default BelajarState;
