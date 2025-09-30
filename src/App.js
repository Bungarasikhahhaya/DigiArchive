import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ganti Switch dengan Routes
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Features from './Component/Features';
import Team from './Component/Team';
import About from './Component/About';
import Register from './Component/Register'; 
import Login from './Component/Login';  
import './style.css';

const App = () => {
  return (
    <Router> {/* Menambahkan Router untuk membungkus aplikasi */}
      <div>
        <Navbar />
        <Routes> {/* Ganti Switch dengan Routes */}
          <Route path="/" exact element={<Hero />} /> {/* Menampilkan landing page di / */}
          <Route path="/register" element={<Register />} /> {/* Menampilkan halaman register di /register */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/features" element={<Features />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
