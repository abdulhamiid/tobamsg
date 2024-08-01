import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer';
import Recipe from './pages/Recipe';

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