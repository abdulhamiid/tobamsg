import React from 'react';
import RecipeCard from './RecipeCard';

const DelRecipe: React.FC = () => {
  return (
    <section className="mx-[6%] my-[100px]">
      <div className="grid grid-cols-2 gap-4 justify-between items-center my-[50px]">
        <h2>
          Try this delicious recipe
          <br />
          to make your day
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqut enim ad minim
          {' '}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-12">
        <RecipeCard src="i1.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="i2.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="i3.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="i4.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="i5.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="i6.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="i7.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="i8.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
      </div>
    </section>
  );
}

export default DelRecipe;
