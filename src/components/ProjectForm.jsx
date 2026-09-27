import PropTypes from 'prop-types'

function ProjectForm({ facultyName, onCancel, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const studentIds = String(data.get('studentIds'))
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean)

    onSubmit({
      type: String(data.get('type')),
      studentIds,
      semesterStart: Number(data.get('semesterStart')),
    })
  }

  return (
    <form className="entity-form" onSubmit={handleSubmit}>
      <label>
        Project type
        <select name="type" defaultValue="BTP">
          <option value="HONORS">Honors</option>
          <option value="BTP">BTP</option>
          <option value="AP">AP</option>
        </select>
      </label>
      <label>
        Faculty
        <input value={facultyName} disabled />
      </label>
      <label>
        Student IDs
        <input name="studentIds" placeholder="STU-101, STU-102" required />
        <small>Separate multiple student IDs with commas.</small>
      </label>
      <label>
        Starting semester
        <input name="semesterStart" type="number" min="1" max="8" defaultValue="1" required />
      </label>
      <div className="form-actions">
        <button className="secondary-button" type="button" onClick={onCancel}>Cancel</button>
        <button className="add-button" type="submit">Register Project</button>
      </div>
    </form>
  )
}

ProjectForm.propTypes = {
  facultyName: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default ProjectForm
