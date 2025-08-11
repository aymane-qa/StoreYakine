import React from 'react';
import { Link } from 'react-router-dom';

function Merci() {
  const containerStyle = {
    margin: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    color: '#fff',
    textAlign: 'center',
    padding: 20,
    fontFamily: 'Arial, sans-serif'
  };

  const titleStyle = { fontSize: '2.5rem', marginBottom: 10 };
  const textStyle = { fontSize: '1.2rem', margin: '5px 0' };
  const linkStyle = { color: '#fff', textDecoration: 'underline', fontSize: '1.1rem' };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Merci pour votre commande ! 🎉</h1>
      <p style={textStyle}>Nous avons bien reçu votre demande et nous vous contacterons très bientôt.</p>
      <p style={textStyle}>
        <Link to="/" style={linkStyle}>Retour à la page d'accueil</Link>
      </p>
    </div>
  );
}

export default Merci;


