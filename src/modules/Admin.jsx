import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MeetingsPage from '../pages/MeetingsPage'
import ProjectsPage from '../pages/ProjectsPage'
import UsersPage from '../pages/UsersPage'
import { meetings, projects, users } from '../data/dummyData'

const links = [
  { id: 'users', label: 'Users', icon: 'users' },
  { id: 'projects', label: 'Projects', icon: 'projects' },
  { id: 'meetings', label: 'Meetings', icon: 'meetings' },
]

function Admin() {
  const [activePage, setActivePage] = useState('users')
  const pages = {
    users: <UsersPage users={users} />,
    projects: <ProjectsPage projects={projects} />,
    meetings: <MeetingsPage meetings={meetings} />,
  }

  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        links={links}
        portalLabel="Admin portal"
        profile={{ initials: 'AD', name: 'Administrator', role: 'ADMIN' }}
        onNavigate={setActivePage}
      />
      <main className="main-content">{pages[activePage]}</main>
    </div>
  )
}

export default Admin
