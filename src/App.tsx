import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Recipe from './pages/Recipe.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
