import React, { useState } from 'react';
import './App.css';

const menu = [
  ['Dashboard', '▦'], ['Kurikulum', '▤'], ['Semester', '◷'], ['Jurusan', '♙'],
  ['Dosen', '♟'], ['Mahasiswa', '♧'], ['Matakuliah', '▣'], ['Ruangan', '▦'], ['Absensi', '▧']
];

const stats = [
  { label: 'Kurikulum', value: '10', icon: '🏛️', color: 'sky', description: 'Data kurikulum aktif' },
  { label: 'Semester', value: '8', icon: '🎓', color: 'green', description: 'Semester tersedia' },
  { label: 'Jurusan', value: '4', icon: '📚', color: 'rose', description: 'Program jurusan' },
  { label: 'Mata Kuliah', value: '35', icon: '📖', color: 'amber', description: 'Mata kuliah terdaftar' },
  { label: 'Dosen', value: '30', icon: '👤', color: 'blue', description: 'Dosen terdaftar' },
  { label: 'Mahasiswa', value: '500', icon: '👥', color: 'lime', description: 'Mahasiswa aktif' },
  { label: 'Ruangan', value: '20', icon: '🗂️', color: 'red', description: 'Ruangan tersedia' },
  { label: 'Absensi', value: '40', icon: '📝', color: 'orange', description: 'Data absensi tercatat' },
];

export default function App() {
  const [active, setActive] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard-app">
      <header className="topbar">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <div className="brand-title">Sistem Informasi Absensi Berbasis Scan QR Code</div>
        <div className="topbar-right"><span className="status-dot" /> <span>Admin</span></div>
      </header>

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-label">MENU UTAMA</div>
        {menu.map(([name, glyph]) => (
          <button key={name} className={`nav-item ${active === name ? 'active' : ''}`} onClick={() => { setActive(name); setMenuOpen(false); }}>
            <span className="nav-glyph">{glyph}</span><span>{name}</span>
          </button>
        ))}
        <button className="nav-item logout" onClick={() => setActive('Logout')}><span className="nav-glyph">↪</span><span>Logout</span></button>
        <div className="sidebar-footer">UNIVERSITAS PRIMA INDONESIA<br/><small>Academic Information System</small></div>
      </aside>


      <main className="main-content">
        <div className="page-heading">
          <div><p className="eyebrow">OVERVIEW</p><h1>{active === 'Dashboard' ? 'Dashboard' : active}</h1></div>
          <div className="breadcrumb">Home <span>/</span> {active}</div>
        </div>
        <section className="welcome-card">
          <div className="welcome-copy"><span className="welcome-chip">ADMIN PANEL</span><h2>Selamat datang,</h2><p className="admin-name">Admin Universitas Prima Indonesia</p><p className="welcome-note">Kelola data akademik dan aktivitas absensi dalam satu dashboard.</p></div>
          <div className="welcome-art" aria-hidden="true"><div className="art-circle circle-one"/><div className="art-circle circle-two"/><div className="art-book">▤</div><div className="art-cap">🎓</div></div>
        </section>
        <div className="section-title-row"><div><h2>Ringkasan Data</h2><p>Informasi terkini dari sistem akademik</p></div><span className="updated-label">● Data overview</span></div>
        <section className="stats-grid">
          {stats.map((item) => (
            <article className={`stat-card ${item.color}`} key={item.label}>
              <div className="stat-main"><div className="stat-icon">{item.icon}</div><div className="stat-info"><strong>{item.value}</strong><span>{item.label}</span></div></div>
              <div className="stat-bottom"><span>{item.description}</span><button onClick={() => setActive(item.label)} aria-label={`Lihat ${item.label}`}>↗</button></div>
            </article>
          ))}
        </section>
        <footer className="page-footer">© {new Date().getFullYear()} Universitas Prima Indonesia <span>•</span> Sistem Informasi Absensi</footer>
      </main>
    </div>
  );
}
