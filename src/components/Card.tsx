import React from 'react';

interface CardProps {
  img?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ img = '', description = '' }) => {
  return (
    <div className="bg-gradient">
      <img src={img} alt={description} />
      <h4 className="font-bold">{description}</h4>
    </div>
  );
};

export default Card;
