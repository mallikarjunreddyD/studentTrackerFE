import PropTypes from 'prop-types'
import { userPropType } from '../data/propTypes'

function UserForm({ initialUser, onCancel, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    onSubmit({
      name: String(data.get('name')).trim(),
      email: String(data.get('email')).trim(),
      role: String(data.get('role')),
    })
  }

  return (
    <form className="entity-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input name="name" defaultValue={initialUser?.name ?? ''} placeholder="e.g. Ananya Sharma" required />
      </label>
      <label>
        Email address
        <input name="email" type="email" defaultValue={initialUser?.email ?? ''} placeholder="name@campus.edu" required />
      </label>
      <label>
        Role
        <select name="role" defaultValue={initialUser?.role ?? 'STUDENT'}>
          <option value="STUDENT">Student</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrator</option>
        </select>
      </label>
      <div className="form-actions">
        <button className="secondary-button" type="button" onClick={onCancel}>Cancel</button>
        <button className="add-button" type="submit">{initialUser ? 'Save Changes' : 'Add User'}</button>
      </div>
    </form>
  )
}

UserForm.propTypes = {
  initialUser: userPropType,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default UserForm
