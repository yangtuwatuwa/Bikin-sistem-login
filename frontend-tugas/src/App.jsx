import { useState } from 'react'
import Dashboard from './dashboard/Dashboard.jsx'
import RetroLogin from './logins/logins.jsx'

function App() {
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function handleLogin({ username, password, help }) {
    if (help) {
      setMessage('Silakan hubungi administrator sekolah untuk mengatur ulang kata sandi.')
      setMessageType('error')
      return
    }

    setMessage('')
    setMessageType('')
    setIsLoading(true)

    try {
      const response = await fetch('/post/logins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username, password }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Login gagal. Periksa kembali data Anda.')

      if (result.data === true && result.token) {
        window.sessionStorage.setItem('authToken', result.token)
        setIsAuthenticated(true)
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

  if (isAuthenticated) return <Dashboard />

  return <RetroLogin onLogin={handleLogin} loading={isLoading} message={message} messageType={messageType} />
}

export default App;
