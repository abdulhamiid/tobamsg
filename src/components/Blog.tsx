import React from 'react';

const Blog: React.FC = () => {
  return (
    <section>
      <div>
        <h2>
          Everyone can be a
          <br />
          chef in their own kitchen
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magnaaliqut enim ad minim
          {' '}
        </p>
        <button type="button">Learn More</button>
      </div>
      <div>
        <img src="foodieland.jpg" alt="Foodieland" />
      </div>
    </section>
  );
}

export default Blog;
