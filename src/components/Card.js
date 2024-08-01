import React from 'react';
import PropTypes from 'prop-types';

function Card({ img, description }) {
  return (
    <div className="bg-gradient">
      <img src={img} alt={description} />
      <h4 className="font-bold">{description}</h4>
    </div>

  );
}

Card.defaultProps = {
  img: '',
  description: '',
};

Card.propTypes = {
  img: PropTypes.string,
  description: PropTypes.string,
};
export default Card;
