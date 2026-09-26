import PropTypes from 'prop-types'
import { projectPropType } from '../data/propTypes'
import PageHeader from '../components/PageHeader'
import ProjectTable from '../components/ProjectTable'
import SectionHeader from '../components/SectionHeader'

function ProjectsPage({ projects }) {
  return (
    <>
      <PageHeader
        eyebrow="Administration"
        title="Projects"
        description="View every registered student project."
      />
      <section aria-labelledby="projects-heading">
        <SectionHeader title="All projects" count={`${projects.length} projects`} />
        <ProjectTable projects={projects} />
      </section>
    </>
  )
}

export default ProjectsPage

ProjectsPage.propTypes = { projects: PropTypes.arrayOf(projectPropType).isRequired }
