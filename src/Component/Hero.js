import React from 'react';
import '../style.css'; // Pastikan Anda menambahkan CSS sesuai

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Selamat Datang di DigiArchive</h1>
          <p>Sistem Pengelolaan Arsip Digital yang Mudah, Aman, dan Modern. Kelola semua dokumen penting Anda dengan teknologi terdepan.</p>
          <div className="hero-buttons">
            <a href="/register" className="btn btn-primary btn-hero">
              <i className="fas fa-rocket"></i> Mulai Sekarang
            </a>
            <a href="#fitur" className="btn btn-outline btn-hero">
              <i className="fas fa-info-circle"></i> Pelajari Lebih
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={require('../images/landing-hero.png')} alt="DigiArchive Dashboard" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
