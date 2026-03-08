import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./contexts/index.js";
import { TodoForm, TodoItem } from "./components/index.js";

function App() {
  // keep track of our todos to update to the UI
  // also the todos, addTodo must be defined here i guess in the same file?? why??
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  // useState([]) can cause the stored todos to appear "wiped" in this setup.
  //
  // Why:
  // On the first render, `todos` is `[]`.
  // After that first render, BOTH useEffects run.
  //
  // 1) The load effect reads from localStorage and calls `setTodos(...)`.
  //    But that state update does NOT change `todos` immediately.
  //    It schedules the NEXT render.
  //
  // 2) The save effect also runs after that same first render.
  //    At that moment, `todos` is still the old value from render 1, which is `[]`.
  //    So it saves `[]` into localStorage and overwrites the previous data.
  //
  // So the problem is not just that the first effect updates on the next render.
  // The key problem is that the save effect can run first with the initial empty array state.

  // easiest way to generate a unique ID is Date.now()
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); // spread the ..todo, in case it has more keys beyond just 'id' i guess
  };

  const updateTodo = (id, todo) => {
    // prev is an array of the all the todos in the website.
    setTodos(
      (prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)), // if the id is the same as one in the array, then we just update that particular todo, otherwise do nothing? (since we are not using prevTodo?)
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)); // filter only keeps those that returns true, we only keep those todos that the id does NOT match. (since the id that matched we should delete)
  };

  const toggleComplete = (id) => {
    setTodos((prev) => {
      return prev.map((prevTodo) => {
        console.log(prevTodo);
        // prevTodo.id === id ? {do something}: {do another something} // this is the boilerplate
        return prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo;
      });
    });
  };

  // this hook only runs once at the start when component changes? and never run again since the dependency array is empty?
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];

      if (Array.isArray(parsedTodos)) {
        setTodos(parsedTodos);
      } else {
        setTodos([]);
      }
    } catch (error) {
      console.error("Failed to parse todos from localStorage:", error);
      setTodos([]);
      localStorage.removeItem("todos");
    }
  }, []); // as soon as the component loads, query the local storage and push the data into the todos state. hence there is no dependency array, we want this to run immediately.

  // this hook runs every time todos changes?
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // add a new todo to local storage.
  }, [todos]);

  return (
    // everything inside TodoProvider is aware of the todo context, we can then import the data from the context
    // use the brackets instead of curly braces if you don't want to use the return keyword.
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <TodoForm />
      {console.log(todos)}
      {todos?.map((todo, index, array) => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </TodoProvider>
  );
}

export default App;
