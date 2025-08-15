import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Produit from './Produit';
import Merci from './Merci';
import Category from './pages/Category';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/merci" element={<Merci />} />
        <Route path="/category/:slug" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
