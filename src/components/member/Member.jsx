import './member.css';
import PropTypes from 'prop-types';

const Member = ({ name, image, pos, desc }) => {
    return (
        <div className='member'>
            <img src={image} alt='member' />
            <div className="member-desc">
                <h1>{name}</h1>
                <p className='info'>{pos}</p>
                <div className='divider'></div>
                <p>{desc}</p>
            </div>
        </div>
    );
};

Member.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    pos: PropTypes.string.isRequired, 
    desc: PropTypes.string, 
};

export default Member;