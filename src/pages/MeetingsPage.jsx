import PropTypes from 'prop-types'
import { meetingPropType } from '../data/propTypes'
import MeetingTable from '../components/MeetingTable'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

function MeetingsPage({ meetings }) {
  return (
    <>
      <PageHeader
        eyebrow="Administration"
        title="Meetings"
        description="View the latest project meeting activity."
      />
      <section aria-labelledby="meetings-heading">
        <SectionHeader title="Recent meetings" count={`${meetings.length} meetings`} />
        <MeetingTable meetings={meetings} />
      </section>
    </>
  )
}

export default MeetingsPage

MeetingsPage.propTypes = { meetings: PropTypes.arrayOf(meetingPropType).isRequired }
