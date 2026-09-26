import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MeetingsPage from './pages/MeetingsPage'
import ProjectsPage from './pages/ProjectsPage'
import UsersPage from './pages/UsersPage'
import { meetings, projects, users } from './data/dummyData'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('users')

  const pages = {
    users: <UsersPage users={users} />,
    projects: <ProjectsPage projects={projects} />,
    meetings: <MeetingsPage meetings={meetings} />,
  }

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        {pages[activePage]}
      </main>
    </div>
  )
}

export default App
