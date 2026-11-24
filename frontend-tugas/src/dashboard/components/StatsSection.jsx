const stats = [
  { label: 'Total siswa', value: '1.000', icon: '👥', color: 'sky', description: 'Siswa terdaftar' },
  { label: 'Total guru', value: '100', icon: '👨‍🏫', color: 'green', description: 'Guru aktif' },
  { label: 'Mata pelajaran', value: '562', icon: '📚', color: 'rose', description: 'Mata pelajaran tersedia' },
  { label: 'Jurusan', value: '23', icon: '🎓', color: 'amber', description: 'Jurusan tersedia' },
]

function StatCard({ item, onOpen }) {
  return (
    <article className={`stat-card ${item.color}`}>
      <div className="stat-main">
        <div className="stat-icon" aria-hidden="true">{item.icon}</div>
        <div className="stat-info">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      </div>
      <div className="stat-bottom">
        <span>{item.description}</span>
        <button onClick={onOpen} aria-label={`Lihat ${item.label}`}>↗</button>
      </div>
    </article>
  )
}

export default function StatsSection({ onOpen }) {
  return (
    <>
      <div className="section-title-row">
        <div>
          <h2>Ringkasan data</h2>
          <p>Informasi utama yang tercatat dalam sistem</p>
        </div>
        <span className="updated-label">● Data sekolah</span>
      </div>
      <section className="stats-grid" aria-label="Ringkasan data sekolah">
        {stats.map((item) => (
          <StatCard key={item.label} item={item} onOpen={() => onOpen(item.label)} />
        ))}
      </section>
    </>
  )
}
