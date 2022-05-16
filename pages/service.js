import React, { useEffect } from "react";
import NavBar from "../components/Header/Nav";
import Service from "../containers/Service/Service";

export default function service() {
  return (
    <NavBar style={{ backgroundColor: "red" }}>
      <Service />
    </NavBar>
  );
}
