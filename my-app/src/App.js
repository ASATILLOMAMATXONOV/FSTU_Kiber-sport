import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Association from "./pages/Association";
import CyberSportGoals from "./pages/CyberSportGoals";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
   <Router>
  <div>
    <HomePage />
    <Association />
    <CyberSportGoals />
        <Contacts />
        <Footer />
  </div>
</Router>
  );
}

export default App;
