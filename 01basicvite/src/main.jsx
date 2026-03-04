import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank", // what is this target thing - it is an attribute, which states where the result should open, _blank means it should open in a new tab.
  },
  children: "Click me to visit Google.",
};

// this is JSX
function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
} // must make it capital, 'myApp' will not work.

// you can technically just return an element
const anotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const areactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click to visit google yess",
); // first into is the element, second input is an OBJECT, third is the innerHTML

createRoot(document.getElementById("root")).render(<MyApp />); // you can also load it like a function like write 'MyApp()' instead '<MyApp />' but NOT recommended - might affect optimisation.
// hence load it like a component by writing '<MyApp />'

createRoot(document.getElementById("root")).render(anotherElement); // this is very weird though
// you can pass in anotherElement as a variable and render it, but you cannot pass reactElement as variable because react does NOT know what type is, what props is, what children is. => we have to use React.createElement() which will convert the params into an object for us!

createRoot(document.getElementById("root")).render(areactElement); // this areactElement is an object so we don't need to have Uppercase.

createRoot(document.getElementById("root")).render(<App />);
