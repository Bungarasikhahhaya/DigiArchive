import React from 'react';
import '../style.css'; // Pastikan Anda menambahkan CSS sesuai

const Features = () => {
  return (
    <section className="features" id="fitur">
      <div className="features-container">
        <div className="section-title">
          <h2>Fitur Unggulan</h2>
          <p>Nikmati berbagai fitur canggih yang memudahkan pengelolaan arsip digital Anda</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <h3>Upload Arsip Mudah</h3>
            <p>Unggah dan kelola arsip digital Anda dengan cepat dan aman. Drag & drop untuk kemudahan maksimal.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Pencarian Cepat</h3>
            <p>Cari arsip dengan mudah menggunakan fitur pencarian canggih berbasis AI dan filter otomatis.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Keamanan Data</h3>
            <p>Data arsip Anda terenkripsi end-to-end dan hanya bisa diakses oleh pengguna yang terotorisasi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
