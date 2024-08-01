import React from 'react'
import Showcase from './Showcase'
import Recipe from './Recipe'
import Cat from './Cat'
import Instagram from './Instagram'
import Footer from './Footer'
import DelRecipe from './DelRecipe'
import MoreRecipe from './MoreRecipe'

function Home() {
  return (
    <>
      <Showcase />
      <Cat />
      <Recipe />
      <MoreRecipe />
      <Instagram />
      <DelRecipe  />
      <Footer />
    </>

  )
}

export default Home