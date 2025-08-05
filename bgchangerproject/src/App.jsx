import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-500 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-10 inset-x-0 justify-center bg-white">
        <button
          className="outline-none m-2 p-2 rounded-lg bg-red "
          onClick={() => setColor("red")}
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button
          className="outline-none m-2 p-2 rounded-lg bg-yellow "
          onClick={() => setColor("yellow")}
          style={{ backgroundColor: "yellow" }}
        >
          yellow
        </button>

        <button
          className="outline-none m-2 p-2 rounded-lg bg-blue "
          onClick={() => setColor("blue")}
          style={{ backgroundColor: "blue" }}
        >
          blue
        </button>

        <button
          className="outline-none m-2 p-2 rounded-lg bg-green "
          onClick={() => setColor("green")}
          style={{ backgroundColor: "green" }}
        >
          green
        </button>

        <button
          className="outline-none m-2 p-2 rounded-lg bg-white "
          onClick={() => setColor("white")}
          style={{ backgroundColor: "white" }}
        >
          white
        </button>

        <button
          className="outline-none m-2 p-2 rounded-lg bg-black "
          onClick={() => setColor("black")}
          style={{ backgroundColor: "black" }}
        >
          black
        </button>
      </div>
    </div>
  );
}

export default App;
