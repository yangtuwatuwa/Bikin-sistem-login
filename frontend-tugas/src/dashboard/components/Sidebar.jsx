const menu = [
  ['Dashboard', '▦'],
  ['Guru', '👨‍🏫'],
  ['Siswa', '👥'],
  ['Reset key', '🔑'],
  ['Tambah mapel', '📚'],
]

export default function Sidebar({ active, menuOpen, onNavigate }) {
  return (
    <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="sidebar-label">MENU UTAMA</div>
      {menu.map(([name, glyph]) => (
        <button
          key={name}
          className={`nav-item ${active === name ? 'active' : ''}`}
          onClick={() => onNavigate(name)}
        >
          <span className="nav-glyph" aria-hidden="true">{glyph}</span>
          <span>{name}</span>
        </button>
      ))}
      <button className="nav-item logout" onClick={() => onNavigate('Dashboard')}>
        <span className="nav-glyph" aria-hidden="true">↪</span>
        <span>Keluar</span>
      </button>
      <div className="sidebar-footer">
        E-RAPORT SEKOLAH<br />
        <small>Sistem Informasi Akademik</small>
      </div>
    </aside>
  )
}
