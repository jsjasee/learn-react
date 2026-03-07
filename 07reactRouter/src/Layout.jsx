// since the layout of the website remains roughly the same (with header, footer and content in between) we can keep the layout to this Layout.jsx file to prevent us from copy and pasting it too much
import React from "react";
import { Outlet } from "react-router-dom"; // what is this??
import Header from "./components/Header/Header.jsx"; // you can also export to index.js file then import all from index.js
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
// all pages that use Layout component will folow Layout component's layout

export default Layout;
