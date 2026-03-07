// this is a wrapper??? eg. React.StrictMode is in the main.jsx which wraps all the App.jsx, and all the child components in App.jsx is also wrapped by React.StrictMode??
import React from "react";

import UserContext from "./UserContext.js";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // we have no user initially?? then we create the user variable here so that ALL the children has access to this i guess?

  // you must return the children back?? is children auto passed in or smth..??
  // then have to go back to App.jsx and wrap it around the Login and Profile components...
  return (
    // the user & setUser are things that the child components can access, like the Login.jsx
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
