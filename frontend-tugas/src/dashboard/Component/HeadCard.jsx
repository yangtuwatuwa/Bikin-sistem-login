import '../../App.css'

 function  StatCard({ tone, label, icon, value, foot }) {
  return <div className={`stat ${tone}`}><div className="stat-top"><span>{label}</span><span className="stat-icon">{icon}</span></div><div className="stat-value">{value}</div><div className="stat-foot">{foot}</div></div>;
}

export default function Stats() {
  const stats = [
    ["green", "Total Jumlah siswa", "↗", "1.000", "↑ alhamdulilah banyak"],
    ["blue", "Total jumlah guru", "▣", "100", "masih lebih dikit dari jumlah siswa"],
    ["pink", "Total jumlah mapel", "◎", "562", "↓ 2,4% dari bulan lalu"],
    ["orange", "Total jumlah jurusan", "◉", "23.891", "↑ 18,6% dari bulan lalu"],
  ];
  return <section className="stats">{stats.map(([tone, label, icon, value, foot]) => <StatCard key={label} {...{ tone, label, icon, value, foot }} />)}</section>;
}