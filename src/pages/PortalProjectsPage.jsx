import PropTypes from 'prop-types'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import ProjectTable from '../components/ProjectTable'
import SectionHeader from '../components/SectionHeader'
import { projectPropType } from '../data/propTypes'

function PortalProjectsPage({ projects, role, canRegister }) {
  const action = canRegister ? (
    <button className="add-button" type="button">
      <Icon name="plus" />
      Register Project
    </button>
  ) : null

  return (
    <>
      <PageHeader
        eyebrow={role}
        title={role === 'FACULTY' ? 'My Projects' : 'My Projects'}
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
  canRegister: PropTypes.bool.isRequired,
}

export default PortalProjectsPage
