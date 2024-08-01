import React from 'react';
import Card from './Card';

function Cat() {
  return (
    <section id="categories">
      <div>
        <h2>Categories</h2>
        <div id="btn-c">
          <p className="font-bold">View All Categories</p>
        </div>
      </div>
      <div>
        <Card img="Breakfast.svg" description="Breakfast" />
        <Card img="Vegan.svg" description="Vegan" />
        <Card img="Meat.svg" description="Meat" />
        <Card img="Dessert.svg" description="Dessert" />
        <Card img="Lunch.svg" description="Lunch" />
        <Card img="Chocolate.svg" description="Chocolate" />
      </div>
    </section>

  );
}

export default Cat;
