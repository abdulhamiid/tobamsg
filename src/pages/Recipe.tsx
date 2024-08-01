import React from 'react';
import Main from '../components/Main';
import IngredentCard from '../components/IngredentCard';
import Drc from '../components/Drc';

const Recipe: React.FC = () => {
  return (
    <div>
      <Main />
      <IngredentCard />
      <Drc />
    </div>
  );
};

export default Recipe;
