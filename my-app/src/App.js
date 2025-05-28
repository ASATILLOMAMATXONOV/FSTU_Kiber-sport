import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Association from "./pages/Association";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <HomePage />
        <Association />
        <Events />
        <Contacts />
      </div>
    </Router>
  );
}

export default App;
