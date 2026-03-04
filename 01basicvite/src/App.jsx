import Youtube from "./Youtube.jsx"; // make sure the name has the extension .jsx, AND THE FILE NAME IS UPPERCASE. OTHERWISE will get errors, or element will not show up on website

// you can render VARIABLES in react!
// note: the things in the {} needs to be able to be evaluated... react will take {2+2} and add it to the object aka like the reactElement in the main.jsx?
// 2+2 can be evaluted, username can be evaluated, but something like 'if (username === "mary") ? "yes" : "no" -> this cannot be evaluated?? it is already evaluated? what does it mean? and add to which part of the object??
// tldr: the {} should only contain basic calculations or variables which javascript can refer to?
// you can also use {} to add spaces only like {" "}
const username = "jason";
function App() {
  const date = "4 March 2026";
  return (
    <>
      <h1>Vite react app {2 + 2}</h1>
      <h2>another one {username} </h2>
      <h3> {date} </h3>
      <Youtube />
    </>
  );
}

export default App;
