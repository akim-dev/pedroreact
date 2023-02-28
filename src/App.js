import "./App.css";
import Button from "./Components/Button";
import RespondingEvent from "./Components/RespondingEvent";
import AboutPage from "./pages/About";
import BelajarState from "./pages/BelajarState";
import ConditonalRendering from "./pages/ConditonalRendering";
import RenderingList from "./pages/RenderingList";
import StateBersama from "./pages/StateBersama";
import TicTacToe from "./pages/TicTacToe";
import TodoPedro from "./pages/TodoPedro";

function App() {
  // style in JSX
  const user = {
    name: "John Doe",
    age: 20,
    location: "New York",
    imageurl: "https://i.imgur.com/yXOvdOSs.jpg",
    imagesize: 90,
  };

  return (
    <div>
      {/* <h1>Welcome to my App</h1> */}
      {/* <Button /> */}
      {/* <AboutPage/> */}
      {/* <h1>{user.name}</h1>
      <img 
      className='avatar'
      src={user.imageurl}
      alt={user.name}
      style={{ 
        widht : user.imageSize,
        height : user.imageSize,
        borderRadius : '50%',
       }}
      /> */}
      {/* <ConditonalRendering/> */}
      {/* <RenderingList/> */}
      {/* <RespondingEvent/> */}
      {/* <BelajarState/> */}
      {/* <BelajarState/> */}
      {/* <BelajarState/> */}
      {/* <BelajarState/> */}
      {/* <StateBersama/> */}

      {/* Project dari documentasi */}
      {/* <TicTacToe/> */}
      {/* <TodoPedro/> */}
      <TodoPedro />
    </div>
  );
}

export default App;
