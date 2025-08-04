import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const IncrementCounter = () => {
    console.log("Incremented Counter with value " + counter);
    setCounter(counter + 1);
  };
  const DecrementCounter = () => {
    if (counter <= 0) {
      console.log("Counter cannot be decremented below 0");
      return;
    } else {
      setCounter(counter - 1);
      console.log("Decremented Counter with value " + counter);
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>Value = {counter}</h2>
      <button onClick={IncrementCounter}>Increament {counter}</button>
      <button onClick={DecrementCounter}>Decrement {counter}</button>
    </>
  );
}

export default App;
