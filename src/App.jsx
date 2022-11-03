import "./App.css";
import names from "./names.json";
import React from "react";
import AllNames from "./AllNames";

const getUniqueName = () => names[Math.floor(Math.random() * names.length)]; 

function App() {
  const [name, setName] = React.useState(getUniqueName())

  return (
    <div>
      <div
        style={{
          backgroundColor: "#4158D0",
          backgroundImage:
            "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
          color: "white",

          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          padding: "2rem",
          fontWeight: "bold",
          boxSizing: "border-box",
          textTransform: "capitalize",
          textAlign: "center",
          width: "100vw",
          height: "100vh",
          fontSize: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div>
          {name.split(" ").map((n) => (
            <div key={n}>{n}</div>
          ))}
          <br />
          <button onClick={() => setName(getUniqueName())}>New name, please!</button>
        </div>
      </div>
      <AllNames />
    </div>
  );
}

export default App;
