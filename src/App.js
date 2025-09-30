import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Features from './Component/Features';
import Team from './Component/Team';
import About from './Component/About';
import Dashboard from './Component/Dashboard';

import './style.css';
import './Dashboard.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Features />
              <Team />
              <About />
            </>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Dashboard
              totalArsip={120}
              totalArsipHariIni={8}
              arsipBulanIni={35}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
