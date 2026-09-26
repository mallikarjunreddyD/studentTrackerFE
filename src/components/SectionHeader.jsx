import PropTypes from 'prop-types'
function SectionHeader({ title, count }) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        <p>{count}</p>
      </div>
    </div>
  )
}

export default SectionHeader

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
}
