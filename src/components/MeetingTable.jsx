import PropTypes from 'prop-types'
import { meetingPropType } from '../data/propTypes'
function MeetingTable({ meetings }) {
  return (
    <div className="table-card"><div className="table-wrap"><table>
      <thead><tr><th>Project</th><th>Date</th><th>Faculty</th><th>Notes</th></tr></thead>
      <tbody>{meetings.map((meeting) => (
        <tr key={meeting.id}>
          <td><strong className="project-id">{meeting.project}</strong></td>
          <td className="date">{meeting.date}</td>
          <td>{meeting.faculty}</td>
          <td className="notes">{meeting.notes}</td>
        </tr>
      ))}</tbody>
    </table></div></div>
  )
}

export default MeetingTable

MeetingTable.propTypes = { meetings: PropTypes.arrayOf(meetingPropType).isRequired }
