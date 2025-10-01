import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Register.css'; 

const Register = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    npm: '',
    jurusan: '',
    password: '',
    password_confirmation: '',
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate(); // Membuat instance navigate untuk pengalihan

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi form (misalnya, memeriksa apakah password dan konfirmasi password cocok)
    if (formData.password !== formData.password_confirmation) {
      setErrors(['Passwords do not match.']);
      return;
    }

    // Anda bisa mengganti bagian ini dengan logika pengiriman data ke backend (misalnya, menggunakan axios)
    // Jika registrasi berhasil, arahkan pengguna ke halaman dashboard
    // Misalnya, mengirimkan data ke server dan kemudian melakukan navigasi ke dashboard:

    // Contoh pengalihan setelah registrasi berhasil
    setErrors([]); // Hapus error setelah validasi sukses
    navigate('/dashboard'); // Pengguna diarahkan ke halaman Dashboard
  };

  return (
    <div className="page-center">
      <div className="register-wrapper">
        <div className="register-left">
          <div className="logo-circle">
            <img src={require('../images/landing-hero.png')} alt="Logo DigiArchive" className="logo-img" />
          </div>
          <h1>DigiArchive</h1>
          <p>Bergabunglah dengan sistem pengelolaan arsip digital yang modern dan efisien</p>
        </div>
        <div className="register-right">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Daftar Akun</h2>
            <p className="subtitle">Buat akun DigiArchive baru</p>

            {/* Menampilkan error jika ada */}
            {errors.length > 0 && (
              <div className="alert">
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nama">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  placeholder="Nama lengkap"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email aktif"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="npm">NPM</label>
                <input
                  type="text"
                  name="npm"
                  id="npm"
                  value={formData.npm}
                  onChange={handleInputChange}
                  placeholder="NPM"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="jurusan">Jurusan</label>
                <input
                  type="text"
                  name="jurusan"
                  id="jurusan"
                  value={formData.jurusan}
                  onChange={handleInputChange}
                  placeholder="Jurusan"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Minimal 8 karakter"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password_confirmation">Konfirmasi Password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  placeholder="Ulangi password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-register">Daftar Sekarang</button>
            <p className="back-link">
              Sudah punya akun? <a href="/login">Masuk di sini</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
