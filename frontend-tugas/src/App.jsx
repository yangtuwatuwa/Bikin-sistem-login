import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setMessage('')
    setMessageType('')
    setIsLoading(true)

    try {
      const response = await fetch('/post/logins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password }),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Login gagal. Periksa kembali data Anda.')
      }

      if (result.data === true) {
        setMessage('Login berhasil. Selamat datang kembali!')
        setMessageType('success')
      } else {
        setMessage('Nama pengguna atau kata sandi salah.')
        setMessageType('error')
      }
    } catch (error) {
      setMessage(error.message || 'Tidak dapat terhubung ke server. Coba lagi.')
      setMessageType('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="login-page">
      <div className="login-decoration decoration-one" aria-hidden="true" />
      <div className="login-decoration decoration-two" aria-hidden="true" />

      <section className="login-card" aria-labelledby="login-title">
        <div className="login-copy">
          <p className="eyebrow">HALLO SELAMAT DATANG E-RAPORT KAMI</p>
          <h1 id="login-title">Login dulu ya untuk masuk</h1>
          <p className="login-description">Masukkan nama pengguna dan kata sandi untuk melanjutkan.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nama pengguna</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="username"
            placeholder="Contoh: galih"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={100}
            required
          />

          <label htmlFor="password">Kata sandi</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Masukkan kata sandi"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            maxLength={100}
            required
          />

          {message && (
            <p className={`form-message ${messageType}`} role="status">
              {message}
            </p>
          )}

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Memeriksa…' : 'Masuk'}
            {!isLoading && <span aria-hidden="true">→</span>}
          </button>
        </form>

        <p className="login-footer">Gunakan akun yang sudah terdaftar untuk masuk.</p>
      </section>
      <p className="page-caption">Akses akun Anda dengan aman</p>
    </main>
  )
}

export default App
