import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import PortalMeetingsPage from '../pages/PortalMeetingsPage'
import PortalProjectsPage from '../pages/PortalProjectsPage'
import { meetings, projects } from '../data/dummyData'

const links = [
  { id: 'projects', label: 'My Projects', icon: 'projects' },
  { id: 'meetings', label: 'Meetings', icon: 'meetings' },
]

const facultyProjects = projects.filter((project) => project.faculty === 'Dr. Vikram Rao')
const facultyMeetings = meetings.filter((meeting) => meeting.faculty === 'Dr. Vikram Rao')

function Faculty() {
  const [activePage, setActivePage] = useState('projects')
  const pages = {
    projects: <PortalProjectsPage projects={facultyProjects} role="FACULTY" canRegister />,
    meetings: <PortalMeetingsPage meetings={facultyMeetings} role="FACULTY" canAdd />,
  }

  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        links={links}
        portalLabel="Faculty portal"
        profile={{ initials: 'VR', name: 'Dr. Vikram Rao', role: 'FACULTY' }}
        onNavigate={setActivePage}
      />
      <main className="main-content">{pages[activePage]}</main>
    </div>
  )
}

export default Faculty
