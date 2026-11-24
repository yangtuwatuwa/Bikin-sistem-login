import { useState } from 'react'
import '../../../App.css'
import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import PageHeading from './components/PageHeading.jsx'
import WelcomeCard from './components/WelcomeCard.jsx'
import StatsSection from './components/StatsSection.jsx'
import PageFooter from './components/PageFooter.jsx'

export default function Dashboard() {
  const [active, setActive] = useState('Dashboard')
  const [menuOpen, setMenuOpen] = useState(false)

  function navigate(name) {
    setActive(name)
    setMenuOpen(false)
  }

  return (
    <div className="dashboard-app">
      <TopBar menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} />
      <Sidebar active={active} menuOpen={menuOpen} onNavigate={navigate} />

      <main className="main-content">
        <PageHeading title={active} />
        <WelcomeCard />
        <StatsSection onOpen={navigate} />
        <PageFooter />
      </main>
    </div>
  )
}
