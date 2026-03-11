import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import UserChild from "./components/User/UserChild.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    // you need to tell it what element you want to load in the path, here we are serving the layout component NOT the app component
    // "about" here means the route is "/about" (use the sandwich concept! put the route in between the route tags to extend the route -> if you need to drill down on the tag, use a <Route></Route> tag, if not just using the normal self-closing tag)
    // "" means the route is just "/"
    // the User route shows dynamic routing, allowing us to capture whatever after the ":" i guess?
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/" element={<User />}>
        // you CANNOT type it like "user/:userid" for this line, otherwise what
        happens if the route is only "/user"? page will error. so this route
        will sandwich the :userid route below to capture both cases, to ensure a
        page serves for both routes.
        <Route path=":userid" element={<UserChild />} />
      </Route>
      <Route loader={githubInfoLoader} path="github" element={<Github />} /> //
      if someone is trying to load the route, use the githubInfoLoader, but how
      do we get the data from the loader? we use a hook - see in Github.jsx
      <Route path="*" element={<div>Not Found</div>} /> // the * means any 404
      found, load this Not found div up. make sure this is at the VERY END
      because this is like a garbage bin that catches any urls that did not get
      captured by the above routes.
    </Route>, // this is a special react component!
  ),
); // there are many routers, we are just using one of them.

// not App component here! it is the RouterProvider component. just a syntax thing?
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
