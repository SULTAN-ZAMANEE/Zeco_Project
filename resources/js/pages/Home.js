// import React, { useState, useEffect, useContext } from 'react';
// import { LanguageContext } from '../contexts/LanguageContext';
// import MapComponent from '../components/map/MapComponent';
// import MechanicList from '../components/map/MechanicList';
// import './Home.css';

// const Home = () => {
//   const { t } = useContext(LanguageContext);
//   const [userLocation, setUserLocation] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [mechanics, setMechanics] = useState([]);
//   const [selectedService, setSelectedService] = useState('');
//   const [searchRadius, setSearchRadius] = useState(5); // km

//   // Get user's location
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           });
//           setLoading(false);
//         },
//         (error) => {
//           console.error('Error getting location:', error);
//           setError(t('location_error'));
//           setLoading(false);
//           // Default location (Khartoum)
//           setUserLocation({ lat: 15.5007, lng: 32.5599 });
//         }
//       );
//     } else {
//       setError(t('geolocation_not_supported'));
//       setLoading(false);
//       // Default location (Khartoum)
//       setUserLocation({ lat: 15.5007, lng: 32.5599 });
//     }
//   }, [t]);

//   // Fetch mechanics (mock data for now)
//   useEffect(() => {
//     if (userLocation) {
//       // This would be replaced with an actual API call
//       const mockMechanics = [
//         {
//           id: 1,
//           name: 'Ahmed Mechanics',
//           location: { lat: userLocation.lat + 0.01, lng: userLocation.lng + 0.01 },
//           services: ['tire_repair', 'engine_diagnostics'],
//           rating: 4.5,
//           distance: 1.2
//         },
//         {
//           id: 2,
//           name: 'Omar Auto Shop',
//           location: { lat: userLocation.lat - 0.01, lng: userLocation.lng - 0.01 },
//           services: ['oil_change', 'brake_service'],
//           rating: 4.2,
//           distance: 1.5
//         },
//         {
//           id: 3,
//           name: 'Khartoum Car Care',
//           location: { lat: userLocation.lat + 0.02, lng: userLocation.lng - 0.02 },
//           services: ['tire_repair', 'battery_replacement'],
//           rating: 4.8,
//           distance: 2.3
//         }
//       ];

//       // Filter by selected service if any
//       const filtered = selectedService
//         ? mockMechanics.filter(m => m.services.includes(selectedService))
//         : mockMechanics;

//       // Filter by distance
//       const withinRadius = filtered.filter(m => m.distance <= searchRadius);

//       setMechanics(withinRadius);
//     }
//   }, [userLocation, selectedService, searchRadius]);

//   const serviceOptions = [
//     { value: '', label: t('all_services') },
//     { value: 'tire_repair', label: t('tire_repair') },
//     { value: 'engine_diagnostics', label: t('engine_diagnostics') },
//     { value: 'oil_change', label: t('oil_change') },
//     { value: 'brake_service', label: t('brake_service') },
//     { value: 'battery_replacement', label: t('battery_replacement') }
//   ];

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//         <p>{t('loading_location')}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <div className="hero-content">
//           <h1>{t('find_mechanic_title')}</h1>
//           <p>{t('find_mechanic_subtitle')}</p>
//         </div>
//       </div>

//       <div className="search-section">
//         <div className="search-filters">
//           <div className="filter-group">
//             <label htmlFor="service">{t('service_type')}:</label>
//             <select
//               id="service"
//               value={selectedService}
//               onChange={(e) => setSelectedService(e.target.value)}
//             >
//               {serviceOptions.map(option => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="filter-group">
//             <label htmlFor="radius">{t('search_radius')}:</label>
//             <select
//               id="radius"
//               value={searchRadius}
//               onChange={(e) => setSearchRadius(Number(e.target.value))}
//             >
//               <option value="1">1 {t('km')}</option>
//               <option value="5">5 {t('km')}</option>
//               <option value="10">10 {t('km')}</option>
//               <option value="20">20 {t('km')}</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="map-section">
//         {error ? (
//           <div className="error-message">{error}</div>
//         ) : (
//           <div className="map-container">
//             <MapComponent 
//               userLocation={userLocation} 
//               mechanics={mechanics} 
//             />
//             <MechanicList mechanics={mechanics} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect, useContext } from 'react';
// import { Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';
// import { LanguageContext } from '../contexts/LanguageContext';
// import MapComponent from '../components/map/MapComponent';
// import MechanicList from '../components/map/MechanicList';

// const Home = () => {
//   const { t } = useContext(LanguageContext);
//   const [userLocation, setUserLocation] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [mechanics, setMechanics] = useState([]);
//   const [selectedService, setSelectedService] = useState('');
//   const [searchRadius, setSearchRadius] = useState(5); // km

//   // Get user's location
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           });
//           setLoading(false);
//         },
//         (error) => {
//           console.error('Error getting location:', error);
//           setError(t('location_error'));
//           setLoading(false);
//           // Default location (Khartoum)
//           setUserLocation({ lat: 15.5007, lng: 32.5599 });
//         }
//       );
//     } else {
//       setError(t('geolocation_not_supported'));
//       setLoading(false);
//       // Default location (Khartoum)
//       setUserLocation({ lat: 15.5007, lng: 32.5599 });
//     }
//   }, [t]);

//   // Fetch mechanics (mock data for now)
//   useEffect(() => {
//     if (userLocation) {
//       // This would be replaced with an actual API call
//       const mockMechanics = [
//         {
//           id: 1,
//           name: 'Ahmed Mechanics',
//           location: { lat: userLocation.lat + 0.01, lng: userLocation.lng + 0.01 },
//           services: ['tire_repair', 'engine_diagnostics'],
//           rating: 4.5,
//           distance: 1.2
//         },
//         {
//           id: 2,
//           name: 'Omar Auto Shop',
//           location: { lat: userLocation.lat - 0.01, lng: userLocation.lng - 0.01 },
//           services: ['oil_change', 'brake_service'],
//           rating: 4.2,
//           distance: 1.5
//         },
//         {
//           id: 3,
//           name: 'Khartoum Car Care',
//           location: { lat: userLocation.lat + 0.02, lng: userLocation.lng - 0.02 },
//           services: ['tire_repair', 'battery_replacement'],
//           rating: 4.8,
//           distance: 2.3
//         }
//       ];

//       // Filter by selected service if any
//       const filtered = selectedService
//         ? mockMechanics.filter(m => m.services.includes(selectedService))
//         : mockMechanics;

//       // Filter by distance
//       const withinRadius = filtered.filter(m => m.distance <= searchRadius);

//       setMechanics(withinRadius);
//     }
//   }, [userLocation, selectedService, searchRadius]);

//   const serviceOptions = [
//     { value: '', label: t('all_services') },
//     { value: 'tire_repair', label: t('tire_repair') },
//     { value: 'engine_diagnostics', label: t('engine_diagnostics') },
//     { value: 'oil_change', label: t('oil_change') },
//     { value: 'brake_service', label: t('brake_service') },
//     { value: 'battery_replacement', label: t('battery_replacement') }
//   ];

//   if (loading) {
//     return (
//       <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
//         <div className="text-center">
//           <Spinner animation="border" role="status" />
//           <p className="mt-2">{t('loading_location')}</p>
//         </div>
//       </Container>
//     );
//   }

//   return (
//     <Container fluid className="px-0">
//       <div className="bg-dark text-white py-5 mb-4 container rounded" style={{
//         backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/vehicle3.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}>
//         <Container className="text-center">
//           <h1>{t('find_mechanic_title')}</h1>
//           <p className="lead">{t('find_mechanic_subtitle')}</p>
//         </Container>
//       </div>

//       <Container>
//         <Row className="mb-4">
//           <Col md={6} lg={4} className="mb-3 mb-md-0">
//             <Form.Group>
//               <Form.Label>{t('service_type')}:</Form.Label>
//               <Form.Select
//                 value={selectedService}
//                 onChange={(e) => setSelectedService(e.target.value)}
//               >
//                 {serviceOptions.map(option => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col md={6} lg={4}>
//             <Form.Group>
//               <Form.Label>{t('search_radius')}:</Form.Label>
//               <Form.Select
//                 value={searchRadius}
//                 onChange={(e) => setSearchRadius(Number(e.target.value))}
//               >
//                 <option value="1">1 {t('km')}</option>
//                 <option value="5">5 {t('km')}</option>
//                 <option value="10">10 {t('km')}</option>
//                 <option value="20">20 {t('km')}</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//         </Row>

//         {error ? (
//           <Alert variant="danger">{error}</Alert>
//         ) : (
//           <Row>
//             <Col lg={8} className="mb-4 mb-lg-0">
//               <MapComponent 
//                 userLocation={userLocation} 
//                 mechanics={mechanics} 
//               />
//             </Col>
//             <Col lg={4}>
//               <MechanicList mechanics={mechanics} />
//             </Col>
//           </Row>
//         )}
//       </Container>
//     </Container>
//   );
// };

// export default Home;


// ---------------------------------------------------------------------------

import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';
import MapComponent from '../components/map/MapComponent';
import MechanicList from '../components/map/MechanicList';
import { mechanicService } from '../services/api';

const Home = () => {
  const { t } = useContext(LanguageContext);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mechanics, setMechanics] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [searchRadius, setSearchRadius] = useState(5); // km
  const [fetchingMechanics, setFetchingMechanics] = useState(false);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError(t('location_error'));
          setLoading(false);
          // Default location (Khartoum)
          setUserLocation({ lat: 15.5007, lng: 32.5599 });
        }
      );
    } else {
      setError(t('geolocation_not_supported'));
      setLoading(false);
      // Default location (Khartoum)
      setUserLocation({ lat: 15.5007, lng: 32.5599 });
    }
  }, [t]);

  // Fetch mechanics from API
  useEffect(() => {
    const fetchMechanics = async () => {
      if (!userLocation) return;
      
      try {
        setFetchingMechanics(true);
        const response = await mechanicService.getNearbyMechanics(
          userLocation.lat,
          userLocation.lng,
          searchRadius
        );
        
        let mechanicsData = response.data.data || [];
        
        // Filter by selected service if any
        if (selectedService && mechanicsData.length > 0) {
          mechanicsData = mechanicsData.filter(mechanic => 
            mechanic.services.some(service => service.name === selectedService)
          );
        }
        
        setMechanics(mechanicsData);
      } catch (err) {
        console.error('Error fetching mechanics:', err);
        setError(t('error_fetching_mechanics'));
        // Use mock data as fallback
        setMechanics(getMockMechanics());
      } finally {
        setFetchingMechanics(false);
      }
    };
    
    fetchMechanics();
  }, [userLocation, selectedService, searchRadius, t]);

  // Mock data function as fallback
  const getMockMechanics = () => {
    if (!userLocation) return [];
    
    return [
      {
        id: 1,
        name: 'Ahmed Mechanics',
        location: { lat: userLocation.lat + 0.01, lng: userLocation.lng + 0.01 },
        services: ['tire_repair', 'engine_diagnostics'],
        rating: 4.5,
        distance: 1.2
      },
      {
        id: 2,
        name: 'Omar Auto Shop',
        location: { lat: userLocation.lat - 0.01, lng: userLocation.lng - 0.01 },
        services: ['oil_change', 'brake_service'],
        rating: 4.2,
        distance: 1.5
      },
      {
        id: 3,
        name: 'Khartoum Car Care',
        location: { lat: userLocation.lat + 0.02, lng: userLocation.lng - 0.02 },
        services: ['tire_repair', 'battery_replacement'],
        rating: 4.8,
        distance: 2.3
      }
    ];
  };

  const serviceOptions = [
    { value: '', label: t('all_services') },
    { value: 'tire_repair', label: t('tire_repair') },
    { value: 'engine_diagnostics', label: t('engine_diagnostics') },
    { value: 'oil_change', label: t('oil_change') },
    { value: 'brake_service', label: t('brake_service') },
    { value: 'battery_replacement', label: t('battery_replacement') }
  ];

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
        <div className="text-center">
          <Spinner animation="border" role="status" />
          <p className="mt-2">{t('loading_location')}</p>
        </div>
      </Container>
    );
  }

  return (
    <Container fluid className="px-0">
      <div className="bg-dark text-white py-5 mb-4 container rounded" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/vehicle3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Container className="text-center">
          <h1>{t('find_mechanic_title')}</h1>
          <p className="lead">{t('find_mechanic_subtitle')}</p>
        </Container>
      </div>

      <Container>
        <Row className="mb-4">
          <Col md={6} lg={4} className="mb-3 mb-md-0">
            <Form.Group>
              <Form.Label>{t('service_type')}:</Form.Label>
              <Form.Select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                {serviceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group>
              <Form.Label>{t('search_radius')}:</Form.Label>
              <Form.Select
                value={searchRadius}
                onChange={(e) => setSearchRadius(Number(e.target.value))}
              >
                <option value="1">1 {t('km')}</option>
                <option value="5">5 {t('km')}</option>
                <option value="10">10 {t('km')}</option>
                <option value="20">20 {t('km')}</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <Row>
            <Col lg={8} className="mb-4 mb-lg-0">
              {fetchingMechanics ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                  <Spinner animation="border" />
                </div>
              ) : (
                <MapComponent 
                  userLocation={userLocation} 
                  mechanics={mechanics} 
                />
              )}
            </Col>
            <Col lg={4}>
              <MechanicList mechanics={mechanics} />
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
};

export default Home;