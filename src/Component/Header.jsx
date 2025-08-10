import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ backgroundColor: '#007bff', padding: '15px 30px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '1.5rem' }}>
      🛒 MonShop
    </Link>
    <nav>
      <Link to="/panier" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>Panier</Link>
    </nav>
  </header>
);

export default Header;
