import PropTypes from 'prop-types'
import { projectPropType } from '../data/propTypes'
function ProjectTable({ projects }) {
  return (
    <div className="table-card"><div className="table-wrap"><table>
      <thead><tr><th>Project</th><th>Type</th><th>Faculty Id</th><th>Sem Start</th><th>Sem End</th><th>Status</th></tr></thead>
      <tbody>{projects.map((project) => (
        <tr key={project.id}>
          <td><strong className="project-id">{project.id}</strong></td>
          <td><span className="type-badge">{project.projectType}</span></td>
          <td>{project.facultyId}</td>
          <td>{project.semesterStart}</td>
          <td>{project.semesterEnd}</td>
          <td><span className={`status-badge ${project.status.toLowerCase()}`}><i />{project.status}</span></td>
        </tr>
      ))}</tbody>
    </table></div></div>
  )
}

export default ProjectTable

ProjectTable.propTypes = { projects: PropTypes.arrayOf(projectPropType).isRequired }
