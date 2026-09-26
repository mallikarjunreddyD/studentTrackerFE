import PropTypes from 'prop-types'
import Icon from './Icon'

const links = [
  { id: 'users', label: 'Users', icon: 'users' },
  { id: 'projects', label: 'Projects', icon: 'projects' },
  { id: 'meetings', label: 'Meetings', icon: 'meetings' },
]

function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">ST</span>
        <div><strong>StudentTracker</strong><small>Admin portal</small></div>
      </div>

      <nav aria-label="Main navigation">
        {links.map((link) => (
          <button
            className={`nav-link ${activePage === link.id ? 'active' : ''}`}
            key={link.id}
            onClick={() => onNavigate(link.id)}
            type="button"
          >
            <Icon name={link.icon} />
            {link.label}
          </button>
        ))}
      </nav>

      <div className="admin-profile">
        <span className="avatar admin-avatar">AD</span>
        <div><strong>Administrator</strong><small>ADMIN</small></div>
      </div>
    </aside>
  )
}

export default Sidebar

Sidebar.propTypes = {
  activePage: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
}
