import React from 'react'
import RecipeCard from './RecipeCard'

function DelRecipe() {
  return (
    <section className='mx-[6%] my-[100px]'>
        <div className='grid grid-cols-2 gap-4 justify-items-center items-center my-[50px]'>
          <h2>Try this delicious recipe <br />to make your day</h2>
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div className='grid grid-cols-4 gap-12'>
          <RecipeCard src="image1.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
          <RecipeCard src="image1.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
          <RecipeCard src="image1.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
          <RecipeCard src="image1.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
          <RecipeCard src="image1.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
          <RecipeCard src="image1.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
          <RecipeCard src="image1.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
          <RecipeCard src="image1.svg" description="Spicy delicious chicken wings" cookingTime="30 minutes" category="Snack" />
        </div>
    </section>
  )
}

export default DelRecipe