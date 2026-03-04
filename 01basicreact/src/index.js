import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // importing the app

// ReactDOM is different from our original browser dom? reactDOM is like a virtual dom, any changes pass through reactDOM, i guess reactDOM compares the changes to browser DOM and then pass the changes ONLY to the browser DOM aka 'document'?
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // rendering the app html here.
// <App /> is JSX syntax
// not recommended, but since App is a method, you can also just write 'App()'
// root.render(App());
