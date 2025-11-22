import React, { useState, useEffect } from "react";
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
import AddDocument from './Component/AddDocument'; // Komponen AddDocument untuk Tambah Dokumen
import Archive from './Component/Archive';
import DeletedDocuments from './Component/DeleteDocument';
import Profile from './Component/Profile';

import './style.css';
import './Dashboard.css';

const App = () => {
  const sampleArchives = [
    { id: 1, judul: 'Laporan Keuangan.pdf', kategori: 'Keuangan', fileUrl: '#', file: 'Laporan Keuangan.pdf', tanggal_upload: '2025-11-01' },
    { id: 2, judul: 'Notulen Rapat.docx', kategori: 'Rapat', fileUrl: '#', file: 'Notulen Rapat.docx', tanggal_upload: '2025-11-15' }
  ];

  const [archives, setArchives] = useState(() => {
    try {
      const raw = localStorage.getItem('archives');
      return raw ? JSON.parse(raw) : sampleArchives;
    } catch (e) {
      return sampleArchives;
    }
  });

  const [deletedDocs, setDeletedDocs] = useState(() => {
    try {
      const raw = localStorage.getItem('deletedDocs');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem('archives', JSON.stringify(archives));
  }, [archives]);

  useEffect(() => {
    localStorage.setItem('deletedDocs', JSON.stringify(deletedDocs));
  }, [deletedDocs]);

  // purge docs older than 30 days
  useEffect(() => {
    const purgeOld = () => {
      const now = Date.now();
      const keep = deletedDocs.filter(d => (d.deletedAt + 30 * 24 * 60 * 60 * 1000) > now);
      if (keep.length !== deletedDocs.length) setDeletedDocs(keep);
    };
    purgeOld();
    const iv = setInterval(purgeOld, 1000 * 60 * 60); // check hourly
    return () => clearInterval(iv);
  }, [deletedDocs]);

  const handleDeleteArchive = (id) => {
    const doc = archives.find(a => a.id === id);
    if (!doc) return;
    setArchives(prev => prev.filter(a => a.id !== id));
    setDeletedDocs(prev => [{ ...doc, deletedAt: Date.now() }, ...prev]);
  };

  const handleRestore = (id) => {
    const doc = deletedDocs.find(d => d.id === id);
    if (!doc) return;
    setDeletedDocs(prev => prev.filter(d => d.id !== id));
    const restored = { ...doc };
    delete restored.deletedAt;
    setArchives(prev => [restored, ...prev]);
    alert('Dokumen berhasil dipulihkan!');
  };

  const handlePermanentDelete = (id) => {
    setDeletedDocs(prev => prev.filter(d => d.id !== id));
  };

  const handleAddArchive = (form) => {
    const next = {
      id: Date.now(),
      judul: form.get('judul') || 'Untitled',
      kategori: form.get('kategori') || 'Lainnya',
      file: form.get('file')?.name || 'file',
      fileUrl: '#',
      tanggal_upload: new Date().toISOString().split('T')[0]
    };
    setArchives(prev => [next, ...prev]);
  };

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

        {/* Halaman Tambah Dokumen  */}
        <Route path="/tambah-dokumen" element={<AddDocument />} />

        {/* Halaman Arsip */}
        <Route path="/arsip" element={<Archive archives={archives} onDeleteArchive={handleDeleteArchive} onAddArchive={handleAddArchive} />} />  {/* Menggunakan Archive untuk Arsip */}

        {/* Halaman Profile */}
        <Route path="/profile" element={<Profile />} /> {/* Menggunakan Profile untuk Profile */}

        {/* Halaman Recycle Bin / Pemulihan Dokumen Terhapus */}
        <Route path="/recycle-bin" element={<DeletedDocuments deletedDocs={deletedDocs} onRestore={handleRestore} onPermanentDelete={handlePermanentDelete} />} />
      </Routes>
    </Router>
  );
};

export default App;
