import PropTypes from 'prop-types'
import Icon from '../components/Icon'
import MeetingTable from '../components/MeetingTable'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import { meetingPropType } from '../data/propTypes'

function PortalMeetingsPage({ meetings, role, canAdd }) {
  const action = canAdd ? (
    <button className="add-button" type="button">
      <Icon name="plus" />
      Add Meeting
    </button>
  ) : null

  return (
    <>
      <PageHeader
        eyebrow={role}
        title="Meetings"
        description={role === 'FACULTY'
          ? 'Review meeting history and record a new project meeting.'
          : 'View meeting notes and updates for your projects.'}
        action={action}
      />
      <section>
        <SectionHeader title="Recent meetings" count={`${meetings.length} meetings`} />
        <MeetingTable meetings={meetings} />
      </section>
    </>
  )
}

PortalMeetingsPage.propTypes = {
  meetings: PropTypes.arrayOf(meetingPropType).isRequired,
  role: PropTypes.oneOf(['FACULTY', 'STUDENT']).isRequired,
  canAdd: PropTypes.bool.isRequired,
}

export default PortalMeetingsPage
