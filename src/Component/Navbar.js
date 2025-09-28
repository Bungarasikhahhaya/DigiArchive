import React, { useState } from 'react';
import '../style.css'; // Pastikan Anda menambahkan CSS sesuai

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <i className="fas fa-archive"></i> DigiArchive
        </a>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <a href="#fitur">Fitur</a>
          <a href="#tim">Tim</a>
          <a href="#tentang">Tentang</a>
        </div>

        <div className="auth-buttons">
          <a href="/login" className="btn btn-outline">
            <i className="fas fa-sign-in-alt"></i> Masuk
          </a>
          <a href="/register" className="btn btn-primary">
            <i className="fas fa-user-plus"></i> Daftar
          </a>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMenu} id="mobileMenuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
