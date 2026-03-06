import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null); // you an pass in any value here for what? but here we just need the value so can put null? then go to the tag, then in the tag add 'ref={passwordRef}'

  // useCallback -> majority of the function remains the same but it is re-rendered? memoization?
  // what are these concepts and how is it diff from useState?
  // memoization and optimisation is done by react itself? just pass in a callback to 'useCallback'?
  // we are using a variable to reference this method, because as soon as a page renders / page loads, we want another hook to run this method, SO WE NEED THIS REFERENCE!
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // if numbers allowed, we can append the numbers to the string, same for characters
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1); // we plus 1 in case to capture the last character in the string in case it is like 24.99 and there are 25 characters, when we floor, it is 24 but + 1 then floor it is 25???

      pass += str.charAt(char); // finds a character at a position, and the char here is acting as the index
    }
    setPassword(pass); // changes the password var with the fresh password generated.
  }, [length, numberAllowed, charAllowed]); // second params is the dependency array for states that don't change too frequently?? for memoization??? whatever that is. AND CANNOT ADD 'password' here because it changes too frequently? why not..

  // Define cases where you want that method to run
  // useEffect allows you to run a piece of code based on a variety of scenarios, and useEffect runs when a component is loaded? so how is it diff from useCallback?

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]); // in useEffect, we want to run the function as long as the things in the dependency array, aka the second args, changes? so it is the opposite of useCallback? everytime the page reloads, all the code inside useEffect will run automatically.

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password); // what is this window navigator thing? i uess the clipboard is just our clipboard? we just access our password from the state?
    // i guess writeText replaces whatever is in the clipboard, there's also readText to read the clipboard.

    // Provide feedback after it is copied (should select everything in the password input) -> use useRef here?
    passwordRef.current?.select();
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly // this means user can only read and cannot edit the input/type more
          ref={passwordRef}
          type="text"
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-500 hover:bg-blue-600 transition-colors text-white px-3 py-0.5 shrink-0 cursor-pointer"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(event) => setLength(event.target.value)} // this is saying whatever the event that fires, we want to take that value and update the length value.
            name=""
            id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }} // i dont get this prev part!! passing another callback into another callback?? then it somehow accepts the previous value like?? this prev value is what the latest state is right before it gets updated? it is safer than !numberAllowed because if user clicks very quickly, react might not pick the latest value of numberAllowed up.. also this (prev) => !prev callback is available in all the react state functions, either give the state function an exact value OR the 'prev' callback convention.
            type="checkbox"
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            defaultChecked={charAllowed}
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
            type="checkbox"
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
