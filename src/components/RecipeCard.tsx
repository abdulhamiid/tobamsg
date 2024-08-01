import React from 'react';
import { IoIosHeart } from 'react-icons/io';

interface RecipeCardProps {
  src: string;
  description: string;
  cookingTime: string;
  category: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  src, description, cookingTime, category,
}) => {
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
};

export default RecipeCard;
