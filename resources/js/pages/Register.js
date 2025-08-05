
// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
// import { AuthContext } from '../contexts/AuthContext';
// import { LanguageContext } from '../contexts/LanguageContext';

// const Register = () => {
//   const { register, error: authError } = useContext(AuthContext);
//   const { t, isRTL } = useContext(LanguageContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone_number: '',
//     password: '',
//     password_confirmation: '',
//     role: 'customer',
//     address: '',
//     latitude: '',
//     longitude: '',
//     bio: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (name === 'role') {
//       setFormData({
//         ...formData,
//         role: checked ? 'mechanic' : 'customer',
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.password_confirmation) {
//       setError(t('passwords_dont_match'));
//       return;
//     }

//     setError('');
//     setLoading(true);

//     const success = await register(formData);
//     setLoading(false);

//     if (success) {
//       navigate('/');
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col md={6} lg={5}>
//           <Card className="shadow">
//             <Card.Body className="p-4">
//               <h2 className="text-center mb-4">
//                 {formData.role === 'mechanic' ? t('mechanic_registration') : t('register')}
//               </h2>

//               {(error || authError) && (
//                 <Alert variant="danger">{error || authError}</Alert>
//               )}

//               <Form onSubmit={handleSubmit} className={isRTL ? 'rtl' : ''}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>{t('full_name')}</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>{t('email')}</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>{t('phone_number')}</Form.Label>
//                   <Form.Control
//                     type="tel"
//                     name="phone_number"
//                     value={formData.phone_number}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>{t('password')}</Form.Label>
//                   <Form.Control
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     minLength="8"
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>{t('confirm_password')}</Form.Label>
//                   <Form.Control
//                     type="password"
//                     name="password_confirmation"
//                     value={formData.password_confirmation}
//                     onChange={handleChange}
//                     required
//                     minLength="8"
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-4">
//                   <Form.Check
//                     type="checkbox"
//                     id="role"
//                     name="role"
//                     label={t('register_as_mechanic')}
//                     checked={formData.role === 'mechanic'}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 {formData.role === 'mechanic' && (
//                   <>
//                     <Form.Group className="mb-3">
//                       <Form.Label>{t('address')}</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleChange}
//                         required
//                       />
//                     </Form.Group>
//                     <Row>
//                       <Col>
//                         <Form.Group className="mb-3">
//                           <Form.Label>{t('latitude')}</Form.Label>
//                           <Form.Control
//                             type="number"
//                             name="latitude"
//                             value={formData.latitude}
//                             onChange={handleChange}
//                             required
//                           />
//                         </Form.Group>
//                       </Col>
//                       <Col>
//                         <Form.Group className="mb-3">
//                           <Form.Label>{t('longitude')}</Form.Label>
//                           <Form.Control
//                             type="number"
//                             name="longitude"
//                             value={formData.longitude}
//                             onChange={handleChange}
//                             required
//                           />
//                         </Form.Group>
//                       </Col>
//                     </Row>
//                     <Form.Group className="mb-3">
//                       <Form.Label>{t('bio')}</Form.Label>
//                       <Form.Control
//                         as="textarea"
//                         rows={3}
//                         name="bio"
//                         value={formData.bio}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                   </>
//                 )}

//                 <div className="d-grid">
//                   <Button
//                     type="submit"
//                     variant="primary"
//                     disabled={loading}
//                   >
//                     {loading ? t('loading') : t('register')}
//                   </Button>
//                 </div>
//               </Form>

//               <div className="text-center mt-3">
//                 <p>
//                   {t('login_prompt')} <Link to="/login">{t('login')}</Link>
//                 </p>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Register;

// -------------------------------------------------------

import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with webpack
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const Register = () => {
  const { register, error: authError } = useContext(AuthContext);
  const { t, isRTL } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    password: '',
    password_confirmation: '',
    role: 'customer',
    address: '',
    latitude: '',
    longitude: '',
    bio: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [mapVisible, setMapVisible] = useState(false);

  // Get user's location when registering as mechanic
  useEffect(() => {
    if (formData.role === 'mechanic' && !userLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
            setFormData(prev => ({
              ...prev,
              latitude: latitude,
              longitude: longitude
            }));
          },
          (error) => {
            console.error('Error getting location:', error);
            // Set default location if geolocation fails
            setUserLocation({ lat: 25.276987, lng: 55.296249 }); // Default location (Dubai)
          }
        );
      }
    }
  }, [formData.role, userLocation]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'role') {
      setFormData({
        ...formData,
        role: checked ? 'mechanic' : 'customer',
      });
      
      // Show map when mechanic role is selected
      if (checked) {
        setMapVisible(true);
      } else {
        setMapVisible(false);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      setError(t('passwords_dont_match'));
      return;
    }

    // Validate location for mechanic
    if (formData.role === 'mechanic' && (!formData.latitude || !formData.longitude)) {
      setError(t('location_required'));
      return;
    }

    setError('');
    setLoading(true);

    const success = await register(formData);
    setLoading(false);

    if (success) {
      navigate('/');
    }
  };

  // Default icon for map marker
  const defaultIcon = new Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Map marker component with click event
  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setUserLocation({ lat, lng });
        setFormData(prev => ({
          ...prev,
          latitude: lat,
          longitude: lng
        }));
      },
    });

    return userLocation ? (
      <Marker 
        position={[userLocation.lat, userLocation.lng]} 
        icon={defaultIcon}
      />
    ) : null;
  };

  // Function to use current location
  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setFormData(prev => ({
            ...prev,
            latitude: latitude,
            longitude: longitude
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
          setError(t('location_error'));
        }
      );
    } else {
      setError(t('geolocation_not_supported'));
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">
                {formData.role === 'mechanic' ? t('mechanic_registration') : t('register')}
              </h2>

              {(error || authError) && (
                <Alert variant="danger">{error || authError}</Alert>
              )}

              <Form onSubmit={handleSubmit} className={isRTL ? 'rtl' : ''}>
                <Form.Group className="mb-3">
                  <Form.Label>{t('full_name')}</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{t('email')}</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{t('phone_number')}</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{t('password')}</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="8"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{t('confirm_password')}</Form.Label>
                  <Form.Control
                    type="password"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    required
                    minLength="8"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    id="role"
                    name="role"
                    label={t('register_as_mechanic')}
                    checked={formData.role === 'mechanic'}
                    onChange={handleChange}
                  />
                </Form.Group>

                {formData.role === 'mechanic' && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>{t('address')}</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>{t('workshop_location')}</Form.Label>
                      {mapVisible && userLocation && (
                        <div className="mb-2">
                          <div className="shadow-sm rounded overflow-hidden mb-2">
                            <MapContainer 
                              center={[userLocation.lat, userLocation.lng]} 
                              zoom={14} 
                              style={{ height: '300px', width: '100%' }}
                            >
                              <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              />
                              <LocationMarker />
                            </MapContainer>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{t('click_map_to_select')}</small>
                            <Button 
                              variant="outline-secondary" 
                              size="sm"
                              onClick={useCurrentLocation}
                            >
                              {t('use_current_location')}
                            </Button>
                          </div>
                        </div>
                      )}
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>{t('latitude')}</Form.Label>
                            <Form.Control
                              type="number"
                              name="latitude"
                              value={formData.latitude}
                              onChange={handleChange}
                              required
                              readOnly
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>{t('longitude')}</Form.Label>
                            <Form.Control
                              type="number"
                              name="longitude"
                              value={formData.longitude}
                              onChange={handleChange}
                              required
                              readOnly
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>{t('bio')}</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </>
                )}

                <div className="d-grid">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                  >
                    {loading ? t('loading') : t('register')}
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-3">
                <p>
                  {t('login_prompt')} <Link to="/login">{t('login')}</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;