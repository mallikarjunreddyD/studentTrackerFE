import { useEffect, useState } from 'react'
import MeetingForm from '../components/MeetingForm'
import Modal from '../components/Modal'
import ProjectForm from '../components/ProjectForm'
import Sidebar from '../components/Sidebar'
import PortalMeetingsPage from '../pages/PortalMeetingsPage'
import PortalProjectsPage from '../pages/PortalProjectsPage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjectData } from '../store/projects-actions'
import { fetchMeetingsData } from '../store/meetings-actions'

const facultyName = 'Dr. Vikram Rao'
const links = [
  { id: 'projects', label: 'My Projects', icon: 'projects' },
  { id: 'meetings', label: 'Meetings', icon: 'meetings' },
]

function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`))
}

function Faculty() {
  const [activePage, setActivePage] = useState('projects')
 
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showMeetingForm, setShowMeetingForm] = useState(false)

  const dispatch = useDispatch()
  const projects = useSelector((state) => state.projects.projects)
  const meetings = useSelector((state) => state.meetings.meetings)

  useEffect(() => {
    async function loaddata() {
      await dispatch(fetchProjectData())
      await dispatch(fetchMeetingsData())
    } loaddata()
  }, [dispatch])

  console.log(projects)

  function registerProject(projectData) {
    const durations = { HONORS: 4, BTP: 2, AP: 1 }
    const semesterEnd = projectData.semesterStart + durations[projectData.type] - 1
    const semester = semesterEnd === projectData.semesterStart
      ? String(projectData.semesterStart)
      : `${projectData.semesterStart}${semesterEnd}`

    setProjects((items) => [...items, {
      id: `PRJ-${String(Date.now()).slice(-5)}`,
      type: projectData.type,
      faculty: facultyName,
      students: projectData.studentIds.length,
      semester,
      status: 'ACTIVE',
    }])
    setShowProjectForm(false)
  }

  function addMeeting(meetingData) {
    setMeetings((items) => [{
      id: Date.now(),
      project: meetingData.project,
      date: formatDate(meetingData.date),
      faculty: facultyName,
      notes: meetingData.notes,
    }, ...items])
    setShowMeetingForm(false)
  }

  const pages = {
    projects: <PortalProjectsPage projects={projects} role="FACULTY" onRegister={() => setShowProjectForm(true)} />,
    meetings: <PortalMeetingsPage meetings={meetings} role="FACULTY" onAdd={() => setShowMeetingForm(true)} />,
  }

  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        links={links}
        portalLabel="Faculty portal"
        profile={{ initials: 'VR', name: facultyName, role: 'FACULTY' }}
        onNavigate={setActivePage}
      />
      <main className="main-content">{pages[activePage]}</main>

      {showProjectForm && (
        <Modal title="Register Project" onClose={() => setShowProjectForm(false)}>
          <ProjectForm facultyName={facultyName} onCancel={() => setShowProjectForm(false)} onSubmit={registerProject} />
        </Modal>
      )}

      {showMeetingForm && (
        <Modal title="Add Meeting" onClose={() => setShowMeetingForm(false)}>
          <MeetingForm projects={projects} onCancel={() => setShowMeetingForm(false)} onSubmit={addMeeting} />
        </Modal>
      )}
    </div>
  )
}

export default Faculty
