import React from "react";

import "./App.css";
import Home from "./Pages/Home";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
