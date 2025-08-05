// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthContext';
// import { LanguageContext } from '../../contexts/LanguageContext';
// import './Header.css';

// const Header = () => {
//   const { currentUser, logout } = useContext(AuthContext);
//   const { language, changeLanguage, t } = useContext(LanguageContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const toggleLanguage = () => {
//     changeLanguage(language === 'en' ? 'ar' : 'en');
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/">
//             <h1>Mekaniky</h1>
//           </Link>
//         </div>
        
//         <nav className="main-nav">
//           <ul>
//             <li>
//               <Link to="/">{t('home')}</Link>
//             </li>
//             <li>
//               <Link to="/vehicles">{t('vehicles')}</Link>
//             </li>
//             {currentUser ? (
//               <>
//                 {currentUser.role === 'mechanic' && (
//                   <li>
//                     <Link to="/dashboard">{t('dashboard')}</Link>
//                   </li>
//                 )}
//                 <li>
//                   <button onClick={handleLogout} className="btn-link">
//                     {t('logout')}
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/login">{t('login')}</Link>
//                 </li>
//                 <li>
//                   <Link to="/register">{t('register')}</Link>
//                 </li>
//               </>
//             )}
//             <li>
//               <button onClick={toggleLanguage} className="btn-language">
//                 {language === 'en' ? 'العربية' : 'English'}
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const { language, changeLanguage, t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">Mekaniky</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">{t('home')}</Nav.Link>
            <Nav.Link as={Link} to="/vehicles">{t('vehicles')}</Nav.Link>
            {currentUser && currentUser.role === 'mechanic' && (
              <Nav.Link as={Link} to="/dashboard">{t('dashboard')}</Nav.Link>
            )}
          </Nav>
          <Nav>
            {currentUser ? (
              <Button variant="outline-light" onClick={handleLogout}>
                {t('logout')}
              </Button>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">{t('login')}</Nav.Link>
                <Nav.Link as={Link} to="/register">{t('register')}</Nav.Link>
              </>
            )}
            <Button 
              variant="outline-light" 
              size="sm" 
              onClick={toggleLanguage} 
              className="me-2"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;