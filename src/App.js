import React from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Features from './Component/Features';
import Team from './Component/Team';
import About from './Component/About';
import './style.css'; // ← perbaikan di sini

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <About />
    </div>
  );
};

export default App;
