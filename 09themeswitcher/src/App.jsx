import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from "./components/Card.jsx";
import { ThemeProvider } from "./context/theme.js";

function App() {
  const [themeMode, setThemeMode] = useState("light"); // you must add the themeMode, darkTheme, lightTheme if not there's no reference to it? we are adding the value to the conext? or are we accessing the value from the context by using 'value={{ themeMode, darkTheme, lightTheme }}'

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode); // add the 'dark' or 'light' to the html
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
