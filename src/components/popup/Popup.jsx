// src/components/modal/Modal.jsx
import './popup.css';
import PropTypes from 'prop-types';

const Popup = ({ isOpen, onClose, event }) => {
    if (!isOpen) return null;

    return (
    <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>X</button>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <a href={event.googleDriveLink} target="_blank" rel="noopener noreferrer">View Photos</a>
        </div>
    </div>
    );
};

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    event: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        googleDriveLink: PropTypes.string,
    }).isRequired,
};

export default Popup;