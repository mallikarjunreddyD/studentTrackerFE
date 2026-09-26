import PropTypes from 'prop-types'
import { userPropType } from '../data/propTypes'
import Icon from './Icon'

function UserTable({ users }) {
  return (
    <div className="table-card"><div className="table-wrap"><table>
      <thead><tr><th>User</th><th>Email</th><th>Role</th><th><span className="sr-only">Actions</span></th></tr></thead>
      <tbody>{users.map((user) => (
        <tr key={user.id}>
          <td><div className="user-name">
            <span className="avatar">{user.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
            <strong>{user.name}</strong>
          </div></td>
          <td className="email">{user.email}</td>
          <td><span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span></td>
          <td><div className="actions">
            <button className="icon-button" type="button" aria-label={`Edit ${user.name}`}><Icon name="edit" /></button>
            <button className="icon-button delete" type="button" aria-label={`Delete ${user.name}`}><Icon name="trash" /></button>
          </div></td>
        </tr>
      ))}</tbody>
    </table></div></div>
  )
}

export default UserTable

UserTable.propTypes = { users: PropTypes.arrayOf(userPropType).isRequired }
