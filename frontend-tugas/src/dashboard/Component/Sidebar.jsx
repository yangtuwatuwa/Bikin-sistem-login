const menu = [
  ["▦", "Dashboard"], ["👤", "guru"], ["👧", "siswa"],
  ["🔑", "reset key"], ["▣", "tambahkan mapel"],
];
export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand"><span></span> E-raport<span>.</span></div>
      <div className="nav-label">Menu utama</div>
      <nav className="nav" aria-label="Menu utama">
        {menu.map(([icon, label]) => (
          <button key={label} className={active === label ? "active" : ""} onClick={() => onNavigate(label)}>
            <span className="nav-icon">{icon}</span><span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom"><strong>Butuh bantuan?</strong>Hubungi tim support jika kamu mengalami kendala.<br/><span>Pusat bantuan →</span></div>
    </aside>
  );
}
