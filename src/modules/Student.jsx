import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import PortalMeetingsPage from '../pages/PortalMeetingsPage'
import PortalProjectsPage from '../pages/PortalProjectsPage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjectData } from '../store/projects-actions'
import { fetchMeetingsData } from '../store/meetings-actions'


const links = [
  { id: 'projects', label: 'My Projects', icon: 'projects' },
  { id: 'meetings', label: 'Meetings', icon: 'meetings' },
]




function Student() {

  const dispatch = useDispatch()
  const projects = useSelector((state) => state.projects.projects)
  const meetings = useSelector((state) => state.meetings.meetings)
const studentProjects = projects
const studentMeetings = meetings.filter((meeting) =>
  studentProjects.some((project) => project.id === meeting.project),
)

   useEffect(() => {
    async function loaddata() {
      await dispatch(fetchProjectData())
      await dispatch(fetchMeetingsData())
    } loaddata()
  }, [dispatch])

  console.log(studentProjects)
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
