import './member.css';
import PropTypes from 'prop-types';

const Member = ({ name, image }) => {
    return (
        <div className='member'>
            <img src={image} alt='member' />
            <div className="member-desc">
            <h1>{name}</h1>
            <p>This is member description.</p>
            </div>
        </div>
    );
};

Member.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Member;