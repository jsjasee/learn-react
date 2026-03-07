import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/5466807/pexels-photo-5466807.jpeg)`,
      }} // what is this url thing? i think there is a similar one in python?
    >
      <h1 className="bg-red-200">test</h1>
    </div>
  );
}

export default App;
