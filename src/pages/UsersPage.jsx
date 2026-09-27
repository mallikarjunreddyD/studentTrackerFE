import PropTypes from 'prop-types'
import { userPropType } from '../data/propTypes'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import UserTable from '../components/UserTable'

function UsersPage({ users, onAdd, onDelete, onEdit }) {
  const addButton = (
    <button className="add-button" type="button" onClick={onAdd}>
      <Icon name="plus" />
      Add User
    </button>
  )

  return (
    <>
      <PageHeader eyebrow="Administration" title="User Management" description="View and manage the users in StudentTracker." action={addButton} />
      <section>
        <SectionHeader title="All users" count={`${users.length} users`} />
        <UserTable users={users} onDelete={onDelete} onEdit={onEdit} />
      </section>
    </>
  )
}

UsersPage.propTypes = {
  users: PropTypes.arrayOf(userPropType).isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default UsersPage
