import { useState } from "react";

export default function RandomColor() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#fff");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function randomHEXColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function randomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
    console.log(`rgb(${r},${g},${b})`);
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        gap: "1rem",
        position: "relative",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setType("hex")}>Create HEX Color</button>
      <button onClick={() => setType("rgb")}>Create RGB Color</button>
      <button
        onClick={
          type === "hex" ? () => randomHEXColor() : () => randomRGBColor()
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
          marginTop: "50px",
          position: "absolute",
        }}
      >
        <h1>{color}</h1>
      </div>
    </div>
  );
}
