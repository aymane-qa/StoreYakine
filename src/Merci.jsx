import React from 'react';
import { Link } from 'react-router-dom';

const Merci = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
    }}>
      <h1>Merci pour votre commande ! 🎉</h1>
      <p>Nous avons bien reçu votre demande et nous vous contacterons très bientôt.</p>
      <p>
        <Link to="/" style={{ color: 'white', textDecoration: 'underline' }}>
          Retour à la page d'accueil
        </Link>
      </p>
    </div>
  );
};

export default Merci;
