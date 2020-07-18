import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const BoxColor = localStorage.getItem("box_color");
  const [color, setColor] = useState(BoxColor);

  function RandomColor() {
    const colorAll = ["deeppink", "green", "yellow", "black", "blue"];
    return colorAll[Math.floor(Math.random() * colorAll.length)];
  }

  function Handing() {
    const newColor = RandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }

  return (
    <div className="App" onClick={Handing} style={{ background: color }} />
  );
}
