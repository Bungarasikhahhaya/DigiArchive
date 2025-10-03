import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

// Impor komponen
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Features from './Component/Features';
import Team from './Component/Team';
import About from './Component/About';
import Register from './Component/Register';  
import Login from './Component/Login';  
import Dashboard from './Component/Dashboard';
import Archive from './Component/Archive'; // Komponen Archive untuk Arsip
import Profile from './Component/Profile'; // Komponen Profile untuk Profil Pengguna

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

        {/* Halaman Arsip */}
        <Route path="/arsip" element={<Archive />} />  {/* Menggunakan Archive untuk Arsip */}

        {/* Halaman Profile */}
        <Route path="/profile" element={<Profile />} /> {/* Menggunakan Profile untuk Profile */}

      </Routes>
    </Router>
  );
};

export default App;
