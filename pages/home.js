import React from "react";
import NavBar from "../components/Header/Nav";
import Home from "./../containers/Home/Home";

export default function HomePage() {
  return (
    <NavBar>
      <Home />
    </NavBar>
  );
}
