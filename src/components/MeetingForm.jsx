import PropTypes from 'prop-types'
import { projectPropType } from '../data/propTypes'

function MeetingForm({ projects, onCancel, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    onSubmit({
      project: String(data.get('project')),
      date: String(data.get('date')),
      notes: String(data.get('notes')).trim(),
    })
  }

  return (
    <form className="entity-form" onSubmit={handleSubmit}>
      <label>
        Project
        <select name="project">
          {projects.map((project) => <option key={project.id} value={project.id}>{project.id}  {project.type}</option>)}
        </select>
      </label>
      <label>
        Meeting date
        <input name="date" type="date" required />
      </label>
      <label>
        Notes
        <textarea name="notes" rows="4" placeholder="Meeting summary and next steps" required />
      </label>
      <div className="form-actions">
        <button className="secondary-button" type="button" onClick={onCancel}>Cancel</button>
        <button className="add-button" type="submit">Add Meeting</button>
      </div>
    </form>
  )
}

MeetingForm.propTypes = {
  projects: PropTypes.arrayOf(projectPropType).isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default MeetingForm
