import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Category = () => {
  const { slug } = useParams();
  const location = useLocation();
  const categoryName = location.state?.name || slug;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        {categoryName}
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '1rem'
      }}>
        {/* Placeholder: add real products for this category here */}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            border: '1px solid #eee',
            borderRadius: '10px',
            padding: '1rem',
            minHeight: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888'
          }}>
            Produit {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;