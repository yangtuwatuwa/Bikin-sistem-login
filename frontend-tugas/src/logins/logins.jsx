import DesktopBar from '../component/DesktopBar.jsx'
import LoginWindow from '../component/LoginWindow.jsx'
import './loginsStyle.css'

export default function RetroLogin({ onLogin, loading, message, messageType }) {
  return (
    <div className="retro-desktop">
      <DesktopBar />
      <LoginWindow onLogin={onLogin} loading={loading} message={message} messageType={messageType} />
    </div>
  )
}
