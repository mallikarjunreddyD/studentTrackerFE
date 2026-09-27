import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import PortalMeetingsPage from '../pages/PortalMeetingsPage'
import PortalProjectsPage from '../pages/PortalProjectsPage'
import { meetings, projects } from '../data/dummyData'

const links = [
  { id: 'projects', label: 'My Projects', icon: 'projects' },
  { id: 'meetings', label: 'Meetings', icon: 'meetings' },
]

const studentProjects = projects.slice(0, 2)
const studentMeetings = meetings.filter((meeting) =>
  studentProjects.some((project) => project.id === meeting.project),
)

function Student() {
  const [activePage, setActivePage] = useState('projects')
  const pages = {
    projects: <PortalProjectsPage projects={studentProjects} role="STUDENT" />,
    meetings: <PortalMeetingsPage meetings={studentMeetings} role="STUDENT" />,
  }

  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        links={links}
        portalLabel="Student portal"
        profile={{ initials: 'AS', name: 'Ananya Sharma', role: 'STUDENT' }}
        onNavigate={setActivePage}
      />
      <main className="main-content">{pages[activePage]}</main>
    </div>
  )
}

export default Student
