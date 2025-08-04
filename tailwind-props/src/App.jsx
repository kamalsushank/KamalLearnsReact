import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FunnyComp from "./FunnyComp";
import CompanyComp from "./CompanyComp";
function App() {
  let loc = ["New York", "San Francisco", "Los Angeles"];
  let loc2 = ["Seattle", "Austin", "Chicago"];
  return (
    <>
      <h1 className="bg-red-400 text-red-900 rounded-xl p-4 mb-4">
        KAMAL SUSHANK
      </h1>
      <CompanyComp name="Apple Company" locations={loc} />
      <CompanyComp name="Microsoft Company" locations={loc2} />
      <FunnyComp />
    </>
  );
}

export default App;
