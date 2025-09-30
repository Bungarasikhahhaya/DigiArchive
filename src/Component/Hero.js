import React from 'react';
import '../style.css'; // Pastikan Anda menambahkan CSS sesuai
import landingHero from '../images/landing-hero.png'; // Menggunakan import untuk gambar

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Selamat Datang di DigiArchive</h1>
          <p>
            Sistem Pengelolaan Arsip Digital yang Mudah, Aman, dan Modern. Kelola semua dokumen penting Anda dengan teknologi terdepan.
          </p>
          <div className="hero-buttons">
            {/* Menambahkan aksesibilitas pada tombol */}
            <a href="/register" className="btn btn-primary btn-hero" aria-label="Mulai registrasi di DigiArchive">
              <i className="fas fa-rocket"></i> Mulai Sekarang
            </a>
            <a href="#fitur" className="btn btn-outline btn-hero" aria-label="Pelajari lebih lanjut tentang DigiArchive">
              <i className="fas fa-info-circle"></i> Pelajari Lebih
            </a>
          </div>
        </div>
        <div className="hero-image">
          {/* Menggunakan import gambar dengan atribut alt yang lebih deskriptif */}
          <img src={landingHero} alt="Tampilan Dashboard DigiArchive" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
