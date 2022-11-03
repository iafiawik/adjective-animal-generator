import "./App.css";
import names from "./names.json";
import React from "react";

function App() {
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          fontWeight: "bold",
          textTransform: "capitalize",
          lineHeight: "2rem",
       
        }}
      >
        {names.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(App);
