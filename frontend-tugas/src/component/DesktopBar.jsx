import { useEffect, useState } from 'react'

export default function DesktopBar() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const formattedTime = time.toLocaleTimeString('id-ID', {
    hour: '2-digit', minute: '2-digit', hour12: false,
  })
  const formattedDate = time.toLocaleDateString('id-ID', {
    weekday: 'short', day: 'numeric', month: 'short',
  })

  return (
    <>
      <header className="menu-bar">
        <div className="menu-left">
          <span className="apple-logo" aria-hidden="true">●</span>
          <strong>EduPortal</strong><span>File</span><span>Edit</span><span>View</span>
        </div>
        <div className="menu-right" aria-label="Waktu sistem">
          <span aria-hidden="true">◉</span><span>Wi-Fi</span><span>{formattedDate}</span><span>{formattedTime}</span>
        </div>
      </header>
      <footer className="desktop-footer">
        <span>◈ EduPortal · Autentikasi aman</span>
        <div className="system-status"><span>◉ Sistem siap</span><span>◈ Terhubung</span></div>
      </footer>
    </>
  )
}
