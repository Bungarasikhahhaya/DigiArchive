import React from 'react';
import '../style.css'; // Pastikan Anda menambahkan CSS sesuai

const Team = () => {
  return (
    <section className="team" id="tim">
      <div className="team-container">
        <div className="section-title">
          <h2>Tim Pengembang</h2>
          <p>Kenali tim profesional di balik DigiArchive</p>
        </div>
        <div className="team-grid">
          {/* Anggota Tim 1 */}
          <div className="team-card">
            <img src={require('../images/imageAnisa.png')} alt="Anisa" className="team-photo" />
            <h3>Anisa Ramadhani</h3>
            <p>Frontend Developer & UI/UX Designer</p>
          </div>

          {/* Anggota Tim 2 */}
          <div className="team-card">
            <img src={require('../images/imageBunga.jpg')} alt="Budi Santoso" className="team-photo" />
            <h3>Bunga Rasikhah Haya</h3>
            <p>Backend Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
