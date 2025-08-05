// import React, { useContext } from 'react';
// import { LanguageContext } from '../../contexts/LanguageContext';
// import './Footer.css';

// const Footer = () => {
//   const { t } = useContext(LanguageContext);
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-section">
//             <h3>{t('about_us')}</h3>
//             <p>{t('about_description')}</p>
//           </div>
          
//           <div className="footer-section">
//             <h3>{t('quick_links')}</h3>
//             <ul>
//               <li><a href="/">{t('home')}</a></li>
//               <li><a href="/vehicles">{t('vehicles')}</a></li>
//               <li><a href="/login">{t('login')}</a></li>
//               <li><a href="/register">{t('register')}</a></li>
//             </ul>
//           </div>
          
//           <div className="footer-section">
//             <h3>{t('contact')}</h3>
//             <p>Email: info@mekaniky.com</p>
//             <p>{t('phone')}: +249 123 456 789</p>
//           </div>
//         </div>
        
//         <div className="footer-bottom">
//           <p>&copy; {currentYear} Mekaniky. {t('all_rights_reserved')}</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LanguageContext } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>{t('about_us')}</h5>
            <p>{t('about_description')}</p>
          </Col>
          
          <Col md={4} className="mb-3 mb-md-0">
            <h5>{t('quick_links')}</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">{t('home')}</a></li>
              <li><a href="/vehicles" className="text-light">{t('vehicles')}</a></li>
              <li><a href="/login" className="text-light">{t('login')}</a></li>
              <li><a href="/register" className="text-light">{t('register')}</a></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5>{t('contact')}</h5>
            <p>Email: info@mekaniky.com</p>
            <p>{t('phone')}: +249 123 456 789</p>
          </Col>
        </Row>
        
        <hr className="my-3" />
        
        <div className="text-center">
          <p className="mb-0">&copy; {currentYear} Mekaniky. {t('all_rights_reserved')}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;