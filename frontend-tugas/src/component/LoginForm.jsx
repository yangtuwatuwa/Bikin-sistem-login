import { useState } from 'react'

export default function LoginForm({ onLogin, loading, message, messageType }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)

  function submit(event) {
    event.preventDefault()
    onLogin({ username, password })
  }

  return (
    <form className="retro-form" onSubmit={submit}>
      <div className="form-group">
        <label className="form-label" htmlFor="username">Nama pengguna</label>
        <input id="username" className="retro-input" type="text" placeholder="Masukkan nama pengguna" value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" maxLength={100} required />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">Kata sandi</label>
        <div className="password-wrap">
          <input id="password" className="retro-input" type={showPassword ? 'text' : 'password'} placeholder="Masukkan kata sandi" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" maxLength={100} required />
          <button type="button" className="show-password" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}>{showPassword ? 'SEMBUNYIKAN' : 'TAMPILKAN'}</button>
        </div>
      </div>
      <div className="options">
        <label className="remember"><input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} /> Ingat saya</label>
        <button className="forgot" type="button" onClick={() => onLogin({ help: true })}>Lupa kata sandi?</button>
      </div>
      <button type="submit" className="login-button" disabled={loading}>{loading ? 'Memeriksa…' : 'Masuk ke portal'}{!loading && <span aria-hidden="true"> →</span>}</button>
      {message && <p className={`message ${messageType}`} role="status">{message}</p>}
    </form>
  )
}
