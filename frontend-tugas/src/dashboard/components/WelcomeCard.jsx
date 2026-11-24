export default function WelcomeCard() {
  return (
    <section className="welcome-card">
      <div className="welcome-copy">
        <span className="welcome-chip">PANEL ADMIN</span>
        <h2>Selamat datang,</h2>
        <p className="admin-name">Admin E-Raport</p>
        <p className="welcome-note">
          Pantau data guru, siswa, mata pelajaran, dan jurusan sekolah dari satu tempat.
        </p>
      </div>
      <div className="welcome-art" aria-hidden="true">
        <div className="art-circle circle-one" />
        <div className="art-circle circle-two" />
        <div className="art-book">▤</div>
        <div className="art-cap">🎓</div>
      </div>
    </section>
  )
}
