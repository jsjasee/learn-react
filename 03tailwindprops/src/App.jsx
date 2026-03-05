import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
import AnotherCard from "./components/AnotherCard.jsx";

function App() {
  const [count, setCount] = useState(0);

  // note: there is a handle of keywords that are changed, for eg. 'class' in HTML is written as 'className' in this component return statement since 'class' is a reserved keyword for javascript. Same for 'for', here it is called 'htmlFor'

  // why we cannot pass arrays directly like album=["midnight sun", "party"] ? jsx takes that array and put it line by line ? whatever this means, can i see the output?
  // MUST PUT {} TO INDICATE THAT IT IS JS, THEN CAN PASS ARRAYS
  // best is to store the array in a variable then pass it

  let randomness = ["cat", "dog", "capybara"];

  return (
    <>
      <h1 className="text-3xl bg-green-300 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <AnotherCard
        username="jason"
        album="midnight sun"
        colors={["red", "blue", "orange"]}
        animals={randomness}
      />
      <AnotherCard />
    </>
  );
}

export default App;
