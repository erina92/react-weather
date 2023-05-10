import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was developed by <a href="/">Erika Miglietta</a> and is{" "}
          <a href="/" target="_blank" rel="nonopener">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
