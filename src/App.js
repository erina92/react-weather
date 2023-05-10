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
          This project was coded by{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            <strong>Erika Miglietta</strong>
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/erina92/react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
