import React from 'react';
import { IoIosHeart } from 'react-icons/io';
import PropTypes from 'prop-types';

function RecipeCard({
  src, description, cookingTime, category,
}) {
  return (
    <div className="rcpcard">
      <img src={src} alt={description} />
      <h3>{description}</h3>
      <div className="icon">
        <div>
          <img src="Timer.svg" alt="time" />
          <p>{cookingTime}</p>
        </div>
        <div>
          <img src="ForkKnife.svg" alt="Foodieland" />
          <p>{category}</p>
        </div>
        <div id="heart-i">
          <IoIosHeart />
        </div>
      </div>
    </div>
  );
}

RecipeCard.defaultProps = {
  src: '',
  description: '',
  cookingTime: '',
  category: '',
};

RecipeCard.propTypes = {
  src: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  cookingTime: PropTypes.string,
};

export default RecipeCard;
