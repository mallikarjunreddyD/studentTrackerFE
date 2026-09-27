import PropTypes from 'prop-types'
import Modal from './Modal'

function ConfirmDialog({ message, onCancel, onConfirm }) {
  return (
    <Modal title="Confirm removal" onClose={onCancel}>
      <div className="confirm-content">
        <p>{message}</p>
        <div className="form-actions">
          <button className="secondary-button" type="button" onClick={onCancel}>Cancel</button>
          <button className="danger-button" type="button" onClick={onConfirm}>Remove</button>
        </div>
      </div>
    </Modal>
  )
}

ConfirmDialog.propTypes = {
  message: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

export default ConfirmDialog
