function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target); // <-- fix here
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props["prop"]);
  }

  container.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Visit Google",
};
const container = document.getElementById("root");
customRender(reactElement, container);
