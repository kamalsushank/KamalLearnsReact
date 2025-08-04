import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <h1>
      This is my app function ... used to check if it works similar to the react
      component named app{" "}
    </h1>
  );
}

// react component we created earlier - not accepted because it will convert the given thing into this type ... it does not need to be a react component
// bundler cannot understand this type of code
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Visit Google",
};
// similar to the previous one but this is a react component
const anotherReactElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// creating a componet using react
const bro = "Sushank";
const reactElementByReact = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "visit google",
  bro
);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />
  // reactElement, // this wont work as it is not a react component
  // anotherReactElement // this will work as it is a react component
  reactElementByReact
  // MyApp()  //This can also be used but not good for coding convention
  //    <React.StrictMode>
  // </React.StrictMode>
);
