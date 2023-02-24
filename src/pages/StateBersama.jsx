import React, { useState } from "react";

function StateBersama() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div  style={{ 
     display: 'block',
     backgroundColor : 'green',
     color: 'white',
     padding: '10px',
     margin: '10px',
     borderRadius: '10px',
     width: '200px',
     alignItems: 'center',
     justifyContent: 'center',
     textAlign: 'center',
     fontSize: '20px',
     fontWeight: 'bold',
     border: '1px solid black',
      }}>
     
      <h2>Counter di update bersama</h2>
      <TombolAnak count={counter} onClick={handleClick} />
      <TombolAnak count={counter} onClick={handleClick} />
      {/* <TombolAnak/> */}
    </div>
  );
}

function TombolAnak({ count, onClick }) {
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={onClick}>Tambah</button>
    </div>
  );
}

export default StateBersama;
