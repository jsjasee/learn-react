// for importing all the context so in app.jsx we can just import all the context from this file.
import { createContext, useContext } from "react";

// we can give a sample of how the todo looks like even though it is not required.
// add the functionality as well, we can write the vague definition of the function, NOT the full function yet? why ? where do we write the full functionality? in app.jsx? so this is just a placeholder?
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// this hook returns another hook. this saves us from navigating 2 files since the useContext is also on this file, everything is in one file.
export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
