import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // make sure to add the '@import "tailwindcss";' at the very top of index.css!
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
