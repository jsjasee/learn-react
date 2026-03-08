import React, { useState } from "react";
import { useTodo } from "../contexts/index.js";

function TodoForm() {
  const [todo, setTodo] = useState(""); // we need to bring the add functionality from app.jsx.....
  const { addTodo } = useTodo();

  // when do we useCallback????
  const add = (event) => {
    event.preventDefault();
    if (!todo) {
      return;
    }
    addTodo({ todo, completed: false }); // we need to give it info, id not needed since we already generate it in the App.jsx everytime the function is executed.
    setTodo(""); // empty "todo" variable out
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
