import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive"); // olive is default value for the variable, color.
  // setColor is the METHOD to change color!

  // tips: duration-200 means there is a transition duration for the change in css
  // w-full and h-screen means width takes up the entire width and height of the screen
  // very pro tip: if you need to pass in a parameter to a function but that thing can only accept a function, use A CALLBACK!!
  // onClick doesn't change value of an element from a value returned from a function, onClick NEEDS a function; so when button is clicked, the callback runs which returns a function that runs immediately since got (), and we pass the input to this function!
  // i guess the style is to inject our own CSS? not the tailwind one?
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-900"
            onClick={() => {
              setColor("darkred");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "darkgreen" }}
            onClick={() => {
              setColor("darkgreen");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "darkblue" }}
            onClick={() => {
              setColor("darkblue");
            }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
