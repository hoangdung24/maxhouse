import { useRef } from "react";
import { useScroll, useWindowScroll } from "react-use";
import React from "react";
const Demo = () => {
  const scrollRef = React.useRef(null);
  const { x, y } = useScroll(scrollRef);
  return (
    <div
      ref={scrollRef}
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: "red",
        overflow: "scroll",
      }}
    >
      <div
        style={{ width: "2000px", height: "2000px", backgroundColor: "grey" }}
      >
        <div style={{ paddingTop: "50vh" }}>x: {x}</div>
        <div>y: {y}</div>
      </div>
    </div>
  );
};
export default Demo;
