import PropTypes from 'prop-types'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import ProjectTable from '../components/ProjectTable'
import SectionHeader from '../components/SectionHeader'
import { projectPropType } from '../data/propTypes'

function PortalProjectsPage({ projects, role, onRegister }) {
  const action = onRegister ? (
    <button className="add-button" type="button" onClick={onRegister}>
      <Icon name="plus" />
      Register Project
    </button>
  ) : null

  return (
    <>
      <PageHeader
        eyebrow={role}
        title="My Projects"
        description={role === 'FACULTY'
          ? 'View and manage the projects assigned to you.'
          : 'View the projects in which you are enrolled.'}
        action={action}
      />
      <section>
        <SectionHeader title="Projects" count={`${projects.length} projects`} />
        <ProjectTable projects={projects} />
      </section>
    </>
  )
}

PortalProjectsPage.propTypes = {
  projects: PropTypes.arrayOf(projectPropType).isRequired,
  role: PropTypes.oneOf(['FACULTY', 'STUDENT']).isRequired,
  onRegister: PropTypes.func,
}

export default PortalProjectsPage
