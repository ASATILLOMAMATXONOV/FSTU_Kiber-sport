import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Association from "./pages/Association";
import CyberSportGoals from "./pages/CyberSportGoals";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";

// Yangi sahifalar:
import NizomlarPage from "./pages/NizomlarPage";
import MalumotPage from "./pages/MalumotPage";
import QollabPage from "./pages/QollabPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Association />
              <CyberSportGoals />
              <Contacts />
              <Footer />
            </>
          }
        />
        <Route path="/nizomlar" element={<NizomlarPage />} />
        <Route path="/malumot" element={<MalumotPage />} />
        <Route path="/qollab" element={<QollabPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
