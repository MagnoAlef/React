
import PropTypes from 'prop-types';

export const Card = ({title , posterImage}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <img src={posterImage} alt="star" style={{ maxWidth: '100%' }} />
      <div style={{ marginLeft: 10 , alignItems:'center'}}>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugiat aliquam ea porro pariatur error ex.
        </p>
        <p>
          Blanditiis sit magnam reiciendis tempore doloremque accusamus aspernatur consequatur quae dicta sunt?
        </p>
        <p>Odit, quam!</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
};
