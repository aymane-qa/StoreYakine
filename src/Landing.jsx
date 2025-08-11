import React, { useState } from 'react';
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoimage from './images/cre-un-logo-lgant-pour-une-boutique-nomme-yakine-store-utilise-uniquement-les-lettres-ys-c.jpg'
import image1 from './images/WhatsApp_Image_2025-08-10_at_14.07.26_b8e31b56-removebg-preview.png';
import image2 from './images/faba.jpg';
import image3 from './images/7504.jpg';
import onestep from './images/Design_sans_titre_-_2025-02-21T142227.448.webp'
import imagee from './images/4 (1).jpg'
import imager from './images/2-1 (1).jpg'
import image4 from './images/7502.jpg'
import onestep2 from './images/H53388047d2a342fa9fd4242e66e65165i.webp' 
import onestep3 from './images/Hef93bc79f13e4a4bbc97bfc4bc79bb60g.webp';
import onestep4 from './images/20e1736419b937545b3afd0bd3aefe92.jpg'
import imageCarousel from './images/a-premium-beauty-exhibition-stand-for-yakine-store-a-brand-that-specializes-in-ceramic-hair-strai.jpg';
import imageCarousel2 from "./images/a-dramatic-high-fashion-advertisement-for-yakine-store-a-luxury-hair-straightener-brand-the-im.jpg";

import {
  BsGiftFill,
  BsPercent,
  BsLightningChargeFill,
  BsTruck,
  BsTelephoneFill,
  BsBagFill,
  BsShopWindow,
  BsCurrencyDollar,
  BsBookFill,
  BsQuestionCircleFill
} from "react-icons/bs";

const StyledContainer = styled(Container)`
  direction: rtl;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .accordion {
    max-width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .accordion-item {
    border-bottom: 1px solid #e0e0e0;
    transition: all 0.3s ease;
    background-color: #fff;
  }

  .accordion-item:last-child {
    border-bottom: none;
  }

  .accordion-header {
    padding: 18px 25px;
    background-color: #f8f9fa;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s;
  }

  .accordion-header:hover {
    background-color: #e9ecef;
  }

  .accordion-header h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #2c3e50;
    font-weight: 600;
  }

  .accordion-icon {
    font-size: 1.2rem;
    color: #2c7be5;
    transition: transform 0.3s;
    margin-right: 10px;
  }

  .accordion-item.active .accordion-icon {
    transform: rotate(180deg);
  }

  .accordion-content {
    padding: 20px 25px;
    background-color: white;
    line-height: 1.6;
    color: #555;
    border-top: 1px solid #f0f0f0;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    .accordion-header {
      padding: 15px 20px;
    }
    
    .accordion-header h3 {
      font-size: 1rem;
    }
    
    .accordion-content {
      padding: 15px 20px;
    }
  }
`;

const StyledWrapper = styled.div`
  .social-login-icons {
    display: flex;
    align-items: center;
    gap: 10px;
    -webkit-box-reflect: below 5px linear-gradient(transparent, #00000055);
  }
  .social-login-icons svg {
    width: 40px;
  }
`;

const prices = {
  1: { old: 250.0, new: 190.99 },
  2: { old: 450.0, new: 260.98 },
  3: { old: 570.0, new: 355.98 },
};

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
      <span className="rating-value">{rating}</span>
    </div>
  );
};

const offres = [
  { icon: <BsGiftFill size={40} />, title: "PROMO ÉTÉ", desc: "Jusqu'à -60%", color: "#ff7043" },
  { icon: <BsPercent size={40} />, title: "OFFRE SPÉCIALE", desc: "-15% sur tout", color: "#ffa726" },
  { icon: <BsLightningChargeFill size={40} />, title: "VENTE EXPRESS", desc: "Seulement 48h", color: "#ef5350" },
  { icon: <BsTruck size={40} />, title: "LIVRAISON GRATUITE", desc: "Dès 199 Dhs", color: "#fbc02d" },
  { icon: <BsPercent size={40} />, title: "PRIX CASSÉS", desc: "Jusqu'à -50%", color: "#ff5722" },
  { icon: <BsTelephoneFill size={40} />, title: "Service Client", desc: "07.77.33.78.29", color: "#ab47bc" },
  { icon: <BsCurrencyDollar size={40} />, title: "BON DE -50 Dhs", desc: "Pour nouveaux inscrits", color: "#ffca28" },
  { icon: <BsBagFill size={40} />, title: "YAKIEN STORE", desc: "+ de 1500 articles", color: "#e53935" },
  { icon: <BsShopWindow size={40} />, title: "Vendez Avec Nous", desc: "Boostez vos ventes", color: "#29b6f6" },
  { icon: <BsCurrencyDollar size={40} />, title: "Devenez Partenaire", desc: "Gagnez plus", color: "#fb8c00" },
  { icon: <BsBookFill size={40} />, title: "Nouveau Catalogue", desc: "Collections 2025", color: "#1e88e5" },
  { icon: <BsQuestionCircleFill size={40} />, title: "Assistance", desc: "Nous sommes là", color: "#8e24aa" }
];

const productData = {
  title: "Lisseur Professionnel"
};

const Landing = () => {
  const [mainImage, setMainImage] = useState(image1);
  const [selectedOption, setSelectedOption] = useState(1);
  const [activeTab, setActiveTab] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [nom, setNom] = useState('');
  const [texte, setTexte] = useState('');
  const [note, setNote] = useState(5);
  const [avisClients, setAvisClients] = useState([
    { id: 1, nom: 'سلمى', texte: 'كنت كنحتاج ساعة ونص دابا غير تلت ساعة وكملت', date: '03-07-2025', note: 4.5 },
    { id: 2, nom: 'مريم', texte: 'البنات كيسولوني فين شريت هاد البلاك', date: '10-07-2025', note: 4.0 },
    { id: 3, nom: 'أمينة', texte: 'ما كيتقبش الشعر ولا كيشدو بزز بحال شي بلاكات.', date: '15-07-2025', note: 3.5 },
      { id: 4, nom: 'سعاد', texte: 'ما بقيتش محتاجة نمشي صالون هاد البلاك دار ليا الخدمة فالدار', date: '15-07-2025', note: 3.5 },
        { id: 5, nom: 'هاجر', texte: 'الشعر ما كيتفششش من بعد الاستعمال.', date: '15-07-2025', note: 3.5 },
          { id: 6, nom: 'هدى', texte: 'كنت دايما كنمشي عند الكوافورة باش نسرّح شعري دابا غير بهدا البلاك وليت كنخدم شعري فداري وكيجي بحال الحرير', date: '15-07-2025', note: 4.5 },
  ]);

  const toggleTab = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  const handleImageChange = (newImage) => {
    setMainImage(newImage);
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!nom.trim() || !texte.trim()) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const newReview = {
      id: Date.now(),
      nom: nom.trim(),
      texte: texte.trim(),
      date: new Date().toLocaleDateString('fr-FR'),
      note,
    };

    setAvisClients(prev => [newReview, ...prev]);
    setNom('');
    setTexte('');
    setNote(5);
    setFormVisible(false);
  };

  const thumbs = [image1, image2, image3];

  // Produits similaires
  const produitsSimilaires = [
    {
      id: 1,
      title: " أداة  تسريح الشعر الاحترافية المثالية – بلاك ماكسي صالون",
      price: "219.99 MAD",
      oldPrice: "325.99 MAD",
      image: image4,
      promotion: "Promotion",
      description: " ما يجعل بلاك سيراميك ماكسي سالون مميزة حقاً هو أداؤها الاحترافي. تم تصميمها لتعمل بدرجة حرارة عالية تصل إلى 750 درجة، مما يضمن تسريح شعركِ حتى الأكثر صعوبة بسهولة تامة. إذا كنتِ تبحثين عن أداة تسريح تُستخدم في الصالونات الكبرى، فإن بلاك سيراميك ماكسي سالون هي الحل الأمثل لكِ. قدرتها على التسريح السريع ستساعدكِ على تجنب ساعات طويلة أمام المرآة، مع الحفاظ على صحة شعركِ وترطيبه "
    },
    {

  id: 2,
  title: "One Step Brosse",
  price: "270.99 MAD",
  oldPrice: "350.99 MAD",
      image: onestep, // <-- Ici on utilise seulement la première image
      promotion: "18%",
      description: "تسريح الشعر أصبح أسهل وأسرع مع One Step Brosse. هذه الأداة تجمع بين الفرشاة ومجفف الشعر في جهاز واحد، مما يوفر لكِ الوقت والجهد. بفضل تصميمها الذكي، يمكنكِ تسريح شعركِ وتجفيفه في خطوة واحدة فقط. سواء كنتِ تبحثين عن تسريحة ناعمة أو مموجة، فإن One Step Brosse هي الخيار المثالي لكِ."
    },
    {
      id: 3,
      title: "لوحة فرد الشعر من ماكسي صالون",
      price: "149.99 MAD",
      oldPrice: "299.99 MAD",
      image: imagee,
      promotion: "45%",
      description: "تقدم لوحة فرد الشعر من ماكسي صالون تجربة فريدة في تسريح الشعر. بفضل تصميمها الأنيق والفعال، يمكنكِ الحصول على شعر ناعم ولامع في دقائق معدودة. هذه اللوحة مصنوعة من السيراميك عالي الجودة الذي يوزع الحرارة بشكل متساوٍ، مما يقلل من تلف الشعر ويمنحه مظهراً صحياً."
    },
    {
      id: 4,
      title: "مكواة فرد الشعر المهنية بألواح سيراميك من ماكسيسالون 450 درجة فهرنهايت",
      price: "120.99 MAD",
      oldPrice: "199.99 MAD",
      image: imager,
    
description: `
    يتضمن هذا الجهاز الخاص بتصفيف الشعر ألواحاً طويلة مغطاة بالسيراميك والتورمالين تنتج حتى 6 أضعاف الأيونات السالبة مقارنة بالألواح السيراميكية التقليدية. يساعد توجيه الأيونات الذي يقدمه هذا الجهاز على تنعيم شعرك ومنحه لمعاناً صحياً. هذه الألواح متينة وتسخن بسرعة حتى 450 فهرنهايت، مما يسمح بفرد فوري ودائم للشعر. أربعة إعدادات مختلفة للحرارة تتيح لك التحكم الكامل في تسريحتك. كما يحتوي المكواة على سلك طويل يمكنه الدوران بزاوية 360 درجة، مما يمنحك حرية حركة أكبر أثناء التصفيف. عرض درجة الحرارة يتراوح من 300 إلى 450 فهرنهايت.

    درجة الحرارة: من 300 إلى 450 °ف
  `
}

    
  ];

   const [isMenuOpen, setIsMenuOpen] = useState(false);
     const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="4" x2="20" y1="6" y2="6"/>
      <line x1="4" x2="20" y1="12" y2="12"/>
      <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  );

  const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  );

  const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );

  const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7Z"/>
    </svg>
  );

  const ShoppingCartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="8" cy="21" r="1"/>
      <circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  );

  return (
    <div className="landing-container">
      {/* Barre Offre spéciale */}
      <div className="top-bar">
        <p>تنبيه: جميع منتجاتنا أصلية احذروا المزيفة</p>
      </div>

      

      {/* Barre logo */}
      <div className="nav-bar">
        <img src={logoimage} alt="" />
      </div>

      






      {/* Carousel */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageCarousel} className="d-block w-100" alt="carousel 1" />
          </div>
          <div className="carousel-item">
            <img src={imageCarousel2} className="d-block w-100" alt="carousel 2" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Produits cards */}
      <div className="container py-5">
        <div className="text-center mb-4">
          <h3 className="fw-bold">Meilleurs Lisseurs 2023</h3>
          <h6 className="text-muted">Céramique | Titanium</h6>
        </div>
      </div>

      {/* Miniatures */}
      <div className="thumbnail-container">
        {[image1, image2, image3].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Miniature ${i + 1}`}
            className={`thumbnail ${mainImage === img ? 'thumbnail-active' : ''}`}
            onClick={() => handleImageChange(img)}
          />
        ))}
      </div>

      {/* Formulaire commande avec options cadre */}
      <Container className="py-4 product-page" dir="rtl" id="commander">
        <Row>
          <Col md={6} className="text-center">
            <img
              src={mainImage}
              alt="Lisseur"
              className="img-fluid main-image mb-3"
            />
          </Col>

          <Col md={6}>
            <h2 className="fw-bold">Lisseur Professionnel</h2>
            <p>⭐⭐⭐⭐☆ <span className="text-muted">4.2 (103 تقييم)</span></p>
            <h4 className="mb-4">
              <del className="text-danger me-2">
                {prices[selectedOption].old.toFixed(2)} درهم
              </del>
              <span className="fw-bold">
                {prices[selectedOption].new.toFixed(2)} درهم
              </span>{" "}
              <span className="badge bg-primary">تخفيض</span>
            </h4>

            {/* Options cadre */}
            <div className="purchase-options mb-4">
              {[1, 2, 3].map((option) => (
                <div
                  key={option}
                  className={`option ${selectedOption === option ? "active" : ""}`}
                  onClick={() => setSelectedOption(option)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter") setSelectedOption(option); }}
                >
                  <span>
                    {option === 1 && "   اشتري واحدة فقط  "}
                    {option === 2 && " اشتري 2 و إحصل على خصم               "}             

                    {option === 3 && "  اشتري 3 و إحصل على خصم "}
                  </span>
                  <strong>{prices[option].new.toFixed(2)} درهم</strong>
                </div>
              ))}
            </div>

            {/* Formulaire */}
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
          </Col>
        </Row>
      </Container>

    {/* Section Produits similaires */}
<section className="similar-products">
  <h2>قد يجيبك أيضاً</h2>
  
  <div className="products-grid">
    {produitsSimilaires.map((prod) => (
      <Link 
        key={prod.id}
        to="/produit" 
        state={{ 
          ...prod, 
          images: prod.images ? prod.images : prod.image ? [prod.image] : [] 
        }}
        className="product-card"
      >
        {prod.promotion && <span className="promo-badge">{prod.promotion}</span>}
        <img src={prod.image} alt={prod.title} />
        <div className="product-info">
          <h3>{prod.title}</h3>
         
          <div className="price-container">
            {prod.oldPrice && <span className="old-price">{prod.oldPrice}</span>}
            <span className="price">{prod.price}</span>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>


      {/* Section Commentaires */}
      <section className="reviews-section">
        <h2 className='text center'>Commentaires des clients</h2>
        
        <div className="reviews-list">
          {avisClients.map(({ id, nom, texte, date, note }) => (
            <div key={id} className="review">
              <StarRating rating={parseFloat(note)} />
              <p className="review-author">{nom}</p>
              <p className="review-text">{texte}</p>
              <p className="review-date">{date}</p>
            </div>
          ))}
        </div>

        {!formVisible ? (
          <button 
            onClick={() => setFormVisible(true)} 
            className="add-review-btn"
          >
            Ajouter un avis
          </button>
        ) : (
          <form onSubmit={handleAddReview} className="review-form">
            <div className="form-group">
              <label htmlFor="nomAvis">Nom <span className="required">*</span></label>
              <input 
                id="nomAvis" 
                type="text" 
                value={nom} 
                onChange={(e) => setNom(e.target.value)} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="texteAvis">Votre avis <span className="required">*</span></label>
              <textarea 
                id="texteAvis" 
                value={texte} 
                onChange={(e) => setTexte(e.target.value)} 
                required 
                rows={4} 
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="noteAvis">Note</label>
              <select 
                id="noteAvis" 
                value={note} 
                onChange={(e) => setNote(parseFloat(e.target.value))}
              >
                {[...Array(10)].map((_, i) => {
                  const val = (i + 1) / 2;
                  return <option key={val} value={val}>{val}</option>;
                })}
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="confirm-btn">Confirmer</button>
              <button 
                type="button" 
                onClick={() => setFormVisible(false)} 
                className="cancel-btn"
              >
                Annuler
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Footer */}
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

        <div className="social-icons">
   
        </div>

        <div className="footer-bottom">
          <p>© 2025 Yakine Store. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;