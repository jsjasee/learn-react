import React from "react";
import { useState, useContext } from "react"; // useContext here allows us to USE THE DATA IN THE CONTEXT.
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); // specify which context

  const handleSubmit = (event) => {
    // prevent the page from refreshing.
    event.preventDefault();
    setUser({ username, password }); // we are adding info to the user, which is IN the context (aka the global variable).. now any child components that can access this global variable (context) can also access user data.
    // we don't have to do prop drilling... a context solves this for us! we are not passing user to the Profile, the Profile.jsx can access the context and take it for itself!
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
