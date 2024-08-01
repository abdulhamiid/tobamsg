import React from 'react';
import Icard from './Icard';

function Instagram() {
  return (
    <section id="sec-exl">
      <div>
        <h2>Check out @foodieland on Instagram</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
          {' '}
        </p>
      </div>
      <div>
        <Icard src="is1.svg" description="The vegetables dishes need to have certain vitamin for those people" />
        <Icard src="Rectangle1.svg" description="The vegetables dishes need to have certain vitamin for those people" />
        <Icard src="is3.svg" description="The vegetables dishes need to have certain vitamin for those people" />
        <Icard src="is4.svg" description="The vegetables dishes need to have certain vitamin for those people" />
      </div>
      <button type="button" className="flex justify-around items-center gap-2.5">
        <span>Visit Our Instagram</span>
        <img src="004-instagram.svg" alt="intagram" />
      </button>
    </section>

  );
}

export default Instagram;
