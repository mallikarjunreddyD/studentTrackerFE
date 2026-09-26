import PropTypes from 'prop-types'

export const userPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.oneOf(['ADMIN', 'FACULTY', 'STUDENT']).isRequired,
})

export const projectPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  students: PropTypes.number.isRequired,
  semester: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
})

export const meetingPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  project: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
})
