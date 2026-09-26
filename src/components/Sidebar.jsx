import PropTypes from 'prop-types'
import Icon from './Icon'

function Sidebar({ activePage, links, portalLabel, profile, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">ST</span>
        <div><strong>StudentTracker</strong><small>{portalLabel}</small></div>
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
        <span className="avatar admin-avatar">{profile.initials}</span>
        <div><strong>{profile.name}</strong><small>{profile.role}</small></div>
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  activePage: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
  portalLabel: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    initials: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default Sidebar
