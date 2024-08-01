import React from 'react';
import CurrentDate from './CurrentDate';

function Showcase() {
  return (
    <main>
      <div />
      <div id="showcase">
        <div>
          <div id="swc-1">
            <img src="image4.svg" alt="Foodieland" />
            <p>Hot Recipes</p>
          </div>
          <h1>Spicy delicious chicken wings </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqut enim ad minim
          </p>
          <div className="cds">
            <div>
              <img src="Timer.svg" alt="time" />
              <p>30 minutes</p>
            </div>
            <div>
              <img src="ForkKnife.svg" alt="Foodieland" />
              <p>Chicken</p>
            </div>
          </div>
          <div id="swc-2">
            <div id="smth">
              <img src="ellipse.svg" alt="Foodieland" />
              <div>
                <h5 className="font-bold">John Smith</h5>
                <CurrentDate />
              </div>
            </div>
            <div id="rcp_button">
              <button type="button">
                <span>View Recipes</span>
                <img src="PlayCircle.svg" alt="play-circle" />
              </button>
            </div>
          </div>
        </div>
        <div id="mask">
          <img id="badge" src="Badge.svg" alt="Foodieland" />
        </div>
      </div>
      <div />
    </main>
  );
}

export default Showcase;
