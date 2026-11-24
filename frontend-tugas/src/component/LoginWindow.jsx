import LoginForm from './LoginForm.jsx'

export default function LoginWindow({ onLogin, loading, message, messageType }) {
  return (
    <main className="login-window">
      <div className="titlebar">
        <div className="window-controls" aria-hidden="true"><span className="traffic red" /><span className="traffic yellow" /><span className="traffic green" /></div>
        <span className="window-title">EduPortal · Akun pengguna</span>
      </div>
      <div className="window-content">
        <div className="system-icon" aria-hidden="true"><div className="avatar"><span className="avatar-head" /><span className="avatar-body" /></div></div>
        <h1 className="heading">Selamat Datang</h1>
        <p className="subtitle">Masuk untuk melihat informasi akademikmu</p>
        <LoginForm onLogin={onLogin} loading={loading} message={message} messageType={messageType} />
        <div className="divider" />
        <div className="footer-note"><strong>Informasi Sistem</strong><br />EduPortal · Versi 1.0.0<br />© 2026 Hak cipta dilindungi</div>
      </div>
    </main>
  )
}
