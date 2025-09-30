import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Impor komponen
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Features from './Component/Features';
import Team from './Component/Team';
import About from './Component/About';
import Register from './Component/Register';  
import Login from './Component/Login';  
import Dashboard from './Component/Dashboard';  // Menambahkan halaman Dashboard

import './style.css';
import './Dashboard.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Halaman Landing Page */}
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
        
        {/* Halaman Register */}
        <Route path="/register" element={<Register />} /> 

        {/* Halaman Login */}
        <Route path="/login" element={<Login />} />

        {/* Halaman Dashboard */}
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
