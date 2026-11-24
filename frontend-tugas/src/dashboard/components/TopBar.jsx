export default function TopBar({ menuOpen, onToggleMenu }) {
  return (
    <header className="topbar">
      <button
        className="menu-toggle"
        onClick={onToggleMenu}
        aria-label="Buka menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>
      <div className="brand-title">Sistem Informasi Akademik E-Raport</div>
      <div className="topbar-right">
        <span className="status-dot" />
        <span>Admin</span>
      </div>
    </header>
  )
}
