import React from 'react';
import Showcase from '../components/Showcase';
import Recipe from '../components/Recipe';
import Cat from '../components/Cat';
import Instagram from '../components/Instagram';
import DelRecipe from '../components/DelRecipe';
import MoreRecipe from '../components/MoreRecipe';

const Home: React.FC = () => {
  return (
    <>
      <Showcase />
      <Cat />
      <Recipe />
      <MoreRecipe />
      <Instagram />
      <DelRecipe />
    </>
  );
};

export default Home;
