import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logoimage from './images/cre-un-logo-lgant-pour-une-boutique-nomme-yakine-store-utilise-uniquement-les-lettres-ys-c.jpg';
import './Produit.css';

const Produit = () => {
  const location = useLocation();
  const productData = location.state || {};

  // ✅ Image principale (première de la liste si dispo)
  const [mainImage, setMainImage] = useState(
    productData.images && productData.images.length > 0
      ? productData.images[0]
      : productData.image || ''
  );

  if (!productData.title) {
    return (
      <div className="product-not-found">
        <p>
          Produit non spécifié. Retour à la <Link to="/">page d'accueil</Link>.
        </p>
      </div>
    );
  }

  const productDetails = {
    price: productData.price || 'Prix non disponible',
    category: productData.category || 'Catégorie non spécifiée',
    stock: productData.stock || 'En stock',
    description:
      productData.desc ||
      productData.description ||
      'Pas de description disponible.'
  };

  return (
    <div className="product-page">
      {/* Barre supérieure */}
      <div className="top-bar">
        <p>تنبيه: جميع منتجاتنا أصلية احذروا المزيفة</p>
      </div>

      {/* Logo */}
      <div className="nav-bar">
        <img src={logoimage} alt="Yakine Store" />
      </div>

      <main className="product-main">
        {/* ✅ Galerie d'images */}
        <section className="product-details">
          <div className="image-gallery">
            <img
              src={mainImage}
              alt={productData.title}
              className="product-image"
            />
            {productData.images && productData.images.length > 1 && (
              <div className="thumbnail-list">
                {productData.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${productData.title} - ${index + 1}`}
                    className={`thumbnail ${
                      mainImage === img ? 'active' : ''
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Détails du produit */}
          <h1 className="product-title">{productData.title}</h1>
          <p className="product-description">{productDetails.description}</p>

          <ul className="product-info">
            <li>
              <strong>Prix :</strong> {productDetails.price}
            </li>
            <li>
              <strong>Catégorie :</strong> {productDetails.category}
            </li>
            <li>
              <strong>Disponibilité :</strong>{' '}
              <span style={{ color: 'green' }}>{productDetails.stock}</span>
            </li>
          </ul>
        </section>

        {/* Formulaire de commande */}
                   <section className="order-form" id="commander" dir="rtl">
              <h2>Commander Maintenant</h2>
              <form 
                action="https://formsubmit.co/aymanekassid48@gmail.com" 
                method="POST"
                className="form"
              >
                <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yakinestor.netlify.app/merci" />
=


                

                <input type="hidden" name="_subject" value={`Nouvelle commande: ${productData.title}`} />
                <input type="hidden" name="Produit" value={productData.title} />

                <div className="form-group">
                  <label htmlFor="nom">Nom complet <span className="required">*</span></label>
                  <input 
                    id="nom" 
                    type="text" 
                    name="Nom" 
                    placeholder="Votre prénom complet" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telephone">Téléphone <span className="required">*</span></label>
                  <input 
                    id="telephone" 
                    type="tel" 
                    name="Téléphone" 
                    placeholder="Votre numéro" 
                    pattern="[0-9]{10,15}" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ville">Ville <span className="required">*</span></label>
                  <input 
                    id="ville" 
                    type="text" 
                    name="Ville" 
                    placeholder="Ville" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="adresse">Adresse complète <span className="required">*</span></label>
                  <textarea 
                    id="adresse" 
                    name="Adresse" 
                    placeholder="Adresse complète" 
                    required 
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="quantite">Quantité <span className="required">*</span></label>
                  <input 
                    id="quantite" 
                    type="number" 
                    name="Quantité" 
                    min="1" 
                    defaultValue={1} 
                    required 
                  />
                </div>

                <button type="submit" className="submit-btn">Commander</button>
              </form>
            </section>
      </main>

      {/* Pied de page */}
      <footer className="footer">
        <div className="footer-header">
          <h2>Yakine</h2>
          <p>SHOP</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Termes et politiques</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Conditions d'utilisation</li>
              <li>Retours & échanges</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contactez-nous</h4>
            <ul>
              <li>Contactez nous</li>
              <li>Aide & FAQ</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>À propos du magasin</h4>
            <ul>
              <li>À propos</li>
              <li>Méthodes de payement</li>
              <li>Expédition et manutention</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Yakine Store. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Produit;
