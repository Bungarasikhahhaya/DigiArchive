import React, { useState } from 'react';
import '../Register.css'; // Pastikan Anda menambahkan CSS sesuai

const Login = () => {
  // State untuk mengelola input formulir
  const [npm, setNpm] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // Menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'npm') {
      setNpm(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();
    // Menangani validasi formulir atau API call untuk login
    if (!npm || !password) {
      setErrors(['NPM dan Password harus diisi']);
    } else {
      setErrors([]);
      // Kirim data ke server, misalnya dengan fetch atau axios
      console.log({ npm, password });
    }
  };

  return (
    <div className="page-center">
      <div className="register-wrapper">
        <div className="register-left">
          <div className="logo-img">
            <img src={require('../images/Logo 2.png')} alt="Logo DigiArchive" className="logo-img" />
          </div>
          <h1>DigiArchive</h1>
          <p>Masuk ke sistem pengelolaan arsip digital yang modern dan efisien</p>
        </div>
        <div className="register-right">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <p className="subtitle">Masuk ke akun DigiArchive Anda</p>
            
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
                <label htmlFor="npm">NPM</label>
                <input
                  type="text"
                  name="npm"
                  id="npm"
                  value={npm}
                  onChange={handleInputChange}
                  placeholder="NPM"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn-register">Masuk</button>
            <p className="back-link">
              Belum punya akun? <a href="/register">Daftar di sini</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
