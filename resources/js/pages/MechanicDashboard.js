// import React, { useState, useContext, useEffect } from 'react';
// import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';
// import { LanguageContext } from '../contexts/LanguageContext';
// import ProfileSection from '../components/dashboard/ProfileSection';
// import ServicesSection from '../components/dashboard/ServicesSection';
// import VehiclesSection from '../components/dashboard/VehiclesSection';
// import RequestsSection from '../components/dashboard/RequestsSection';
// import './MechanicDashboard.css';

// const MechanicDashboard = () => {
//   const { currentUser, loading: authLoading } = useContext(AuthContext);
//   const { t, isRTL } = useContext(LanguageContext);
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('profile');
  
//   // Redirect if not logged in or not a mechanic
//   // useEffect(() => {
//   //   if (!authLoading && (!currentUser || currentUser.role !== 'mechanic')) {
//   //     navigate('/login');
//   //   }
//   // }, [currentUser, authLoading, navigate]);
  
//   // if (authLoading) {
//   //   return (
//   //     <div className="loading-container">
//   //       <div className="spinner"></div>
//   //       <p>{t('loading')}</p>
//   //     </div>
//   //   );
//   // }
  
//   // ✅ خليه كده مثلاً أو احذفه بالكامل:
// if (authLoading) {
//   return (
//     <div className="loading-container">
//       <div className="spinner"></div>
//       <p>{t('loading')}</p>
//     </div>
//   );
// }
//   if (!currentUser || currentUser.role !== 'mechanic') {
//     return null; // Will redirect in useEffect
//   }
  
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <h1>{t('dashboard')}</h1>
//       </div>
      
//       <div className="dashboard-content">
//         <div className={`dashboard-sidebar ${isRTL ? 'rtl' : ''}`}>
//           <nav className="dashboard-nav">
//             <NavLink 
//               to="/dashboard" 
//               end
//               className={({ isActive }) => isActive ? 'active' : ''}
//               onClick={() => setActiveTab('profile')}
//             >
//               {t('profile')}
//             </NavLink>
//             <NavLink 
//               to="/dashboard/services" 
//               className={({ isActive }) => isActive ? 'active' : ''}
//               onClick={() => setActiveTab('services')}
//             >
//               {t('services')}
//             </NavLink>
//             <NavLink 
//               to="/dashboard/vehicles" 
//               className={({ isActive }) => isActive ? 'active' : ''}
//               onClick={() => setActiveTab('vehicles')}
//             >
//               {t('my_vehicles')}
//             </NavLink>
//             <NavLink 
//               to="/dashboard/requests" 
//               className={({ isActive }) => isActive ? 'active' : ''}
//               onClick={() => setActiveTab('requests')}
//             >
//               {t('requests')}
//             </NavLink>
//           </nav>
//         </div>
        
//         <div className="dashboard-main">
//           <Routes>
//             <Route path="/" element={<ProfileSection />} />
//             <Route path="/services" element={<ServicesSection />} />
//             <Route path="/vehicles" element={<VehiclesSection />} />
//             <Route path="/requests" element={<RequestsSection />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MechanicDashboard;

// import React, { useState, useContext, useEffect } from 'react';
// import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
// import { Container, Row, Col, Nav, Spinner } from 'react-bootstrap';
// import { AuthContext } from '../contexts/AuthContext';
// import { LanguageContext } from '../contexts/LanguageContext';
// import ProfileSection from '../components/dashboard/ProfileSection';
// import ServicesSection from '../components/dashboard/ServicesSection';
// import VehiclesSection from '../components/dashboard/VehiclesSection';
// import RequestsSection from '../components/dashboard/RequestsSection';

// const MechanicDashboard = () => {
//   const { currentUser, loading: authLoading } = useContext(AuthContext);
//   const { t, isRTL } = useContext(LanguageContext);
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('profile');
  
//   // Redirect if not logged in or not a mechanic
//   useEffect(() => {
//     if (!authLoading && (!currentUser || currentUser.role !== 'mechanic')) {
//       navigate('/login');
//     }
//   }, [currentUser, authLoading, navigate]);
  
//   if (authLoading) {
//     return (
//       <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
//         <div className="text-center">
//           <Spinner animation="border" role="status" />
//           <p className="mt-2">{t('loading')}</p>
//         </div>
//       </Container>
//     );
//   }
  
//   if (!currentUser || currentUser.role !== 'mechanic') {
//     return null; // Will redirect in useEffect
//   }
  
//   return (
//     <Container fluid>
//       <Row className="mb-4">
//         <Col>
//           <h1 className="mt-3">{t('dashboard')}</h1>
//         </Col>
//       </Row>
      
//       <Row>
//         <Col md={3} className={`mb-4 ${isRTL ? 'order-md-2' : ''}`}>
//           <Nav variant="pills" className="flex-column">
//             <Nav.Item>
//               <Nav.Link 
//                 as={NavLink} 
//                 to="/dashboard" 
//                 end
//                 onClick={() => setActiveTab('profile')}
//               >
//                 {t('profile')}
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link 
//                 as={NavLink} 
//                 to="/dashboard/services" 
//                 onClick={() => setActiveTab('services')}
//               >
//                 {t('services')}
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link 
//                 as={NavLink} 
//                 to="/dashboard/vehicles" 
//                 onClick={() => setActiveTab('vehicles')}
//               >
//                 {t('my_vehicles')}
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link 
//                 as={NavLink} 
//                 to="/dashboard/requests" 
//                 onClick={() => setActiveTab('requests')}
//               >
//                 {t('requests')}
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Col>
        
//         <Col md={9} className={isRTL ? 'order-md-1' : ''}>
//           <Routes>
//             <Route path="/" element={<ProfileSection />} />
//             <Route path="/services" element={<ServicesSection />} />
//             <Route path="/vehicles" element={<VehiclesSection />} />
//             <Route path="/requests" element={<RequestsSection />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default MechanicDashboard;

// --------------------------------------------------------------------------

import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Nav, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { LanguageContext } from '../contexts/LanguageContext';
import ProfileSection from '../components/dashboard/ProfileSection';
import ServicesSection from '../components/dashboard/ServicesSection';
import VehiclesSection from '../components/dashboard/VehiclesSection';
import RequestsSection from '../components/dashboard/RequestsSection';

const MechanicDashboard = () => {
  const { currentUser, loading: authLoading } = useContext(AuthContext);
  const { t, isRTL } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Redirect if not logged in or not a mechanic
  useEffect(() => {
    if (!authLoading && (!currentUser || currentUser.role !== 'mechanic')) {
      navigate('/login');
    }
  }, [currentUser, authLoading, navigate]);
  
  if (authLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
        <div className="text-center">
          <Spinner animation="border" role="status" />
          <p className="mt-2">{t('loading')}</p>
        </div>
      </Container>
    );
  }
  
  if (!currentUser) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <Container className="py-4">
      <h1 className="mb-4">{t('mechanic_dashboard')}</h1>
      
      <Row>
        <Col md={3} className="mb-4">
          <Nav className="flex-column dashboard-nav" variant="pills">
            <Nav.Link 
              className={activeTab === 'profile' ? 'active' : ''}
              onClick={() => setActiveTab('profile')}
            >
              {t('profile')}
            </Nav.Link>
            <Nav.Link 
              className={activeTab === 'services' ? 'active' : ''}
              onClick={() => setActiveTab('services')}
            >
              {t('services')}
            </Nav.Link>
            <Nav.Link 
              className={activeTab === 'vehicles' ? 'active' : ''}
              onClick={() => setActiveTab('vehicles')}
            >
              {t('vehicles')}
            </Nav.Link>
            <Nav.Link 
              className={activeTab === 'requests' ? 'active' : ''}
              onClick={() => setActiveTab('requests')}
            >
              {t('service_requests')}
            </Nav.Link>
          </Nav>
        </Col>
        
        <Col md={9}>
          {activeTab === 'profile' && <ProfileSection />}
          {activeTab === 'services' && <ServicesSection />}
          {activeTab === 'vehicles' && <VehiclesSection />}
          {activeTab === 'requests' && <RequestsSection />}
        </Col>
      </Row>
    </Container>
  );
};

export default MechanicDashboard;