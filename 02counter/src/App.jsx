import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15); // the first item in the array is the variable, second is the method, can name the variable and method whatever you like, MAKE SURE TO PASS IN THE INITIAL VALUE OF THE VARIABLE IN THE FUNCTION (IT DOES NOT NEED TO BE A NUMBER, can be booleans, arrays, objects even methods - but not recommended)

  // let counter = 15; // we should use state instead, which means - if anything in the state changes, then our UI will also update

  const addValue = () => {
    // you need to use the method in the useState() array to update the variable in the array (like its brother) and setCounter() is a hook?

    setCounter(counter + 1); // you basically just pass in the new value of the counter?

    // console.log(counter); // yes the counter goes up by 1 BUT the number on the website DOES NOT update. we have to use react's mechanism in order to update the UI.
    // counter++;
  };

  const removeValue = () => {
    // method 1 to update value
    // setCounter(counter - 1);

    // // method 2 (HOW COME THIS DOESN'T WORK? it still retains the old value of counter??)
    // counter--;
    // console.log(counter);
    // setCounter(counter);

    // method 3 - pass the updated value of counter
    // const newCounter = counter - 1;
    // setCounter(newCounter);

    // ALSO REACT HAS SOMETHING GOT BATCHING, IT DOESN'T SEND THE CODE ONE BY ONE, EG. THE CODE BELOW, DOESN'T DECREASE BY 4, IT DECREASES BY 1. react batches EVERYTHING then send it over to the browser (this is called reconcilation)
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);

    // how to avoid batching when you want to run the code line by line aka iterate it line by line -> use a callback? since the callback MUST finish, the setCounter method must wait for it to finish before it updates the value of counter, so it is guaranteed to run line by line and cannot be batched?? is prevCounter just the counter variable that is auto passed in or smth.. confused?

    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>React course with hitesh {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter} </p>
    </>
  );
}

export default App;
