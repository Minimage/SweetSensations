import React from "react";
import ReactDOM from "react-dom";
import { donuts } from "./donuts";
import image from "./images/Backgroundcopy.png";
import "./styles.css";

export default function App() {
  return (
    <div
      className="center"
      style={{
        backgroundImage: `url(${image})`,

        width: "100vw",
        margin: "auto",
        height: "93vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <h1>Donut Shop</h1>
      <p>Welcome to our donut shop! Here are our delicious donuts:</p>
    </div>
  );
}
