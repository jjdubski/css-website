import "./event.css"
import chevron from "/images/chevron-right.svg"
import Popup from "../popup/Popup"
import { useState } from 'react'
import PropTypes from 'prop-types'

const Event = ({event}) => {
const [isPopupOpen, setIsPopupOpen] = useState(false);

const handleOpenPopup = () => {
    setIsPopupOpen(true);   
};

const handleClosePopup = () => {
    setIsPopupOpen(false);
};
return (
    <>
        <div className='tile-cont' onClick={handleOpenPopup}>
            <h2 className="subtitle">{event.title}</h2>
            <div className="tile-body">
                <p className="tile-date-time">{event.date}</p>
                <p className="info">{event.description}</p>
            </div>
            <p className="learn-more">Learn more<img src={chevron} alt=">" height={10}/></p>
        </div>
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} event={event}/>
    </>
  )
}

Event.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        googleDriveLink: PropTypes.string,
    }).isRequired,
};

export default Event;