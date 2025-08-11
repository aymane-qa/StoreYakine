import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Produit from './Produit';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/produit" element={<Produit />} />
                    className="thumbnail"
      </Routes>
    </Router>
  );
}

export default App;
