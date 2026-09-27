import { useState } from 'react'
import ConfirmDialog from '../components/ConfirmDialog'
import Modal from '../components/Modal'
import Sidebar from '../components/Sidebar'
import UserForm from '../components/UserForm'
import MeetingsPage from '../pages/MeetingsPage'
import ProjectsPage from '../pages/ProjectsPage'
import UsersPage from '../pages/UsersPage'
import { meetings, projects, users as initialUsers } from '../data/dummyData'

const links = [
  { id: 'users', label: 'Users', icon: 'users' },
  { id: 'projects', label: 'Projects', icon: 'projects' },
  { id: 'meetings', label: 'Meetings', icon: 'meetings' },
]

function Admin() {
  const [activePage, setActivePage] = useState('users')
  const [users, setUsers] = useState(initialUsers)
  const [userForm, setUserForm] = useState(null)
  const [deleteCandidate, setDeleteCandidate] = useState(null)

  function saveUser(userData) {
    if (userForm.user) {
      setUsers((items) => items.map((user) =>
        user.id === userForm.user.id ? { ...user, ...userData } : user,
      ))
    } else {
      setUsers((items) => [...items, { ...userData, id: Date.now() }])
    }
    setUserForm(null)
  }

  function removeUser() {
    setUsers((items) => items.filter((user) => user.id !== deleteCandidate.id))
    setDeleteCandidate(null)
  }

  const pages = {
    users: (
      <UsersPage
        users={users}
        onAdd={() => setUserForm({ user: null })}
        onEdit={(user) => setUserForm({ user })}
        onDelete={setDeleteCandidate}
      />
    ),
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

      {userForm && (
        <Modal title={userForm.user ? 'Edit User' : 'Add User'} onClose={() => setUserForm(null)}>
          <UserForm initialUser={userForm.user} onCancel={() => setUserForm(null)} onSubmit={saveUser} />
        </Modal>
      )}

      {deleteCandidate && (
        <ConfirmDialog
          message={`Remove ${deleteCandidate.name} from StudentTracker?`}
          onCancel={() => setDeleteCandidate(null)}
          onConfirm={removeUser}
        />
      )}
    </div>
  )
}

export default Admin
