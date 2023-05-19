import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Taranto" />
        <footer>
          This project was developed by{" "}
          <a href="https://github.com/erina92" target="_blank" rel="noreferrer">
            Erika Miglietta
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/erina92/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
