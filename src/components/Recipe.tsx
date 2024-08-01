import React from 'react';
import RecipeCard from './RecipeCard';

const Recipe: React.FC = () => {
  return (
    <section id="rcp">
      <div>
        <h2>Simple and tasty recipes</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div id="recipe-col">
        <RecipeCard src="image1.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="image2.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="image3.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="image5.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="image7.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <img src="Ads2.svg" alt="ads" />
        <RecipeCard src="image6.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="image8t.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        <RecipeCard src="image8.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
      </div>
    </section>
  );
}

export default Recipe;
