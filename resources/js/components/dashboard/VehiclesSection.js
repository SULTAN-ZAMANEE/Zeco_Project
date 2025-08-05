// import React, { useState, useContext, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencilAlt, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { AuthContext } from '../../contexts/AuthContext';
// import { LanguageContext } from '../../contexts/LanguageContext';
// import './DashboardSections.css';

// const VehiclesSection = () => {
//   const { currentUser } = useContext(AuthContext);
//   const { t, isRTL } = useContext(LanguageContext);
//   const [vehicles, setVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [editingVehicle, setEditingVehicle] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     brand: '',
//     model: '',
//     year: '',
//     price: '',
//     location: '',
//     description: '',
//     imageUrl: ''
//   });

//   // Fetch mechanic's vehicles
//   useEffect(() => {
//     // This would be replaced with an actual API call
//     const mockVehicles = [
//       {
//         id: 1,
//         title: 'Toyota Corolla 2018',
//         brand: 'Toyota',
//         model: 'Corolla',
//         year: 2018,
//         price: 12000,
//         location: 'Khartoum',
//         description: 'Well maintained Toyota Corolla with low mileage.',
//         imageUrl: '/vehicle1.jpg',
//         postedDate: '2023-05-15'
//       },
//       {
//         id: 2,
//         title: 'Honda Civic 2019',
//         brand: 'Honda',
//         model: 'Civic',
//         year: 2019,
//         price: 15000,
//         location: 'Omdurman',
//         description: 'Excellent condition Honda Civic with all service records.',
//         imageUrl: '/vehicle2.jpg',
//         postedDate: '2023-06-20'
//       }
//     ];

//     setTimeout(() => {
//       setVehicles(mockVehicles);
//       setLoading(false);
//     }, 500);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // This would be replaced with an actual API call
//     if (editingVehicle) {
//       // Update existing vehicle
//       const updatedVehicles = vehicles.map(vehicle => 
//         vehicle.id === editingVehicle.id ? 
//         { 
//           ...vehicle, 
//           ...formData, 
//           price: Number(formData.price),
//           year: Number(formData.year)
//         } : 
//         vehicle
//       );
//       setVehicles(updatedVehicles);
//     } else {
//       // Add new vehicle
//       const newVehicle = {
//         id: Date.now(), // temporary ID
//         ...formData,
//         price: Number(formData.price),
//         year: Number(formData.year),
//         postedDate: new Date().toISOString().split('T')[0]
//       };
//       setVehicles([...vehicles, newVehicle]);
//     }

//     // Reset form
//     setFormData({
//       title: '',
//       brand: '',
//       model: '',
//       year: '',
//       price: '',
//       location: '',
//       description: '',
//       imageUrl: ''
//     });
//     setEditingVehicle(null);
//     setShowForm(false);
//   };

//   const handleEdit = (vehicle) => {
//     setFormData({
//       title: vehicle.title,
//       brand: vehicle.brand,
//       model: vehicle.model,
//       year: vehicle.year.toString(),
//       price: vehicle.price.toString(),
//       location: vehicle.location,
//       description: vehicle.description,
//       imageUrl: vehicle.imageUrl
//     });
//     setEditingVehicle(vehicle);
//     setShowForm(true);
//   };

//   const handleDelete = (vehicleId) => {
//     // This would be replaced with an actual API call
//     if (window.confirm(t('confirm_delete_vehicle'))) {
//       setVehicles(vehicles.filter(vehicle => vehicle.id !== vehicleId));
//     }
//   };

//   if (loading) {
//     return (
//       <div className="dashboard-section">
//         <div className="loading-container">
//           <div className="spinner"></div>
//           <p>{t('loading')}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-section">
//       <div className="section-header">
//         <h2>{t('my_vehicles')}</h2>
//         {!showForm && (
//           <button 
//             className="btn-add" 
//             onClick={() => setShowForm(true)}
//           >
//             <FontAwesomeIcon icon={faPlus} /> {t('add_vehicle')}
//           </button>
//         )}
//       </div>

//       {showForm ? (
//         <form onSubmit={handleSubmit} className={isRTL ? 'rtl' : ''}>
//           <div className="form-group">
//             <label htmlFor="title">{t('title')}</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="brand">{t('brand')}</label>
//               <input
//                 type="text"
//                 id="brand"
//                 name="brand"
//                 value={formData.brand}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="model">{t('model')}</label>
//               <input
//                 type="text"
//                 id="model"
//                 name="model"
//                 value={formData.model}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="year">{t('year')}</label>
//               <input
//                 type="number"
//                 id="year"
//                 name="year"
//                 value={formData.year}
//                 onChange={handleChange}
//                 min="1900"
//                 max={new Date().getFullYear()}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="price">{t('price')} ($)</label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 min="0"
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="location">{t('location')}</label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="description">{t('description')}</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="3"
//               required
//             ></textarea>
//           </div>

//           <div className="form-group">
//             <label htmlFor="imageUrl">{t('image_url')}</label>
//             <input
//               type="text"
//               id="imageUrl"
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               placeholder="https://example.com/image.jpg"
//             />
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="btn-save">
//               {editingVehicle ? t('update') : t('save')}
//             </button>
//             <button 
//               type="button" 
//               className="btn-cancel"
//               onClick={() => {
//                 setShowForm(false);
//                 setEditingVehicle(null);
//                 setFormData({
//                   title: '',
//                   brand: '',
//                   model: '',
//                   year: '',
//                   price: '',
//                   location: '',
//                   description: '',
//                   imageUrl: ''
//                 });
//               }}
//             >
//               {t('cancel')}
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="vehicle-list">
//           {vehicles.length > 0 ? (
//             vehicles.map(vehicle => (
//               <div key={vehicle.id} className="service-card">
//                 <div className="vehicle-card-header">
//                   <h3>{vehicle.title}</h3>
//                   <div className="service-actions">
//                     <button 
//                       className="btn-edit-small" 
//                       onClick={() => handleEdit(vehicle)}
//                     >
//                       <FontAwesomeIcon icon={faPencilAlt} />
//                     </button>
//                     <button 
//                       className="btn-delete" 
//                       onClick={() => handleDelete(vehicle.id)}
//                     >
//                       <FontAwesomeIcon icon={faTrash} />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="vehicle-card-details">
//                   <p><strong>{t('price')}:</strong> ${vehicle.price.toLocaleString()}</p>
//                   <p><strong>{t('brand')}:</strong> {vehicle.brand}</p>
//                   <p><strong>{t('model')}:</strong> {vehicle.model}</p>
//                   <p><strong>{t('year')}:</strong> {vehicle.year}</p>
//                   <p><strong>{t('location')}:</strong> {vehicle.location}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>{t('no_vehicles')}</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default VehiclesSection;

import React, { useState, useContext, useEffect } from 'react';
import { Card, Button, Form, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../contexts/AuthContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const VehiclesSection = () => {
  const { currentUser } = useContext(AuthContext);
  const { t, isRTL } = useContext(LanguageContext);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    model: '',
    year: '',
    price: '',
    location: '',
    description: '',
    imageUrl: ''
  });

  // Fetch mechanic's vehicles
  useEffect(() => {
    // This would be replaced with an actual API call
    const mockVehicles = [
      {
        id: 1,
        title: 'Toyota Corolla 2018',
        brand: 'Toyota',
        model: 'Corolla',
        year: 2018,
        price: 12000,
        location: 'Khartoum',
        description: 'Well maintained Toyota Corolla with low mileage.',
        imageUrl: '/vehicle1.jpg',
        postedDate: '2023-05-15'
      },
      {
        id: 2,
        title: 'Honda Civic 2019',
        brand: 'Honda',
        model: 'Civic',
        year: 2019,
        price: 15000,
        location: 'Omdurman',
        description: 'Excellent condition Honda Civic with all service records.',
        imageUrl: '/vehicle2.jpg',
        postedDate: '2023-06-20'
      }
    ];

    setTimeout(() => {
      setVehicles(mockVehicles);
      setLoading(false);
    }, 500);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // This would be replaced with an actual API call
    if (editingVehicle) {
      // Update existing vehicle
      const updatedVehicles = vehicles.map(vehicle => 
        vehicle.id === editingVehicle.id ? 
        { 
          ...vehicle, 
          ...formData, 
          price: Number(formData.price),
          year: Number(formData.year)
        } : 
        vehicle
      );
      setVehicles(updatedVehicles);
    } else {
      // Add new vehicle
      const newVehicle = {
        id: Date.now(), // temporary ID
        ...formData,
        price: Number(formData.price),
        year: Number(formData.year),
        postedDate: new Date().toISOString().split('T')[0]
      };
      setVehicles([...vehicles, newVehicle]);
    }

    // Reset form
    setFormData({
      title: '',
      brand: '',
      model: '',
      year: '',
      price: '',
      location: '',
      description: '',
      imageUrl: ''
    });
    setEditingVehicle(null);
    setShowForm(false);
  };

  const handleEdit = (vehicle) => {
    setFormData({
      title: vehicle.title,
      brand: vehicle.brand,
      model: vehicle.model,
      year: vehicle.year.toString(),
      price: vehicle.price.toString(),
      location: vehicle.location,
      description: vehicle.description,
      imageUrl: vehicle.imageUrl
    });
    setEditingVehicle(vehicle);
    setShowForm(true);
  };

  const handleDelete = (vehicleId) => {
    // This would be replaced with an actual API call
    if (window.confirm(t('confirm_delete_vehicle'))) {
      setVehicles(vehicles.filter(vehicle => vehicle.id !== vehicleId));
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <Spinner animation="border" role="status" />
        <span className="ms-2">{t('loading')}</span>
      </div>
    );
  }

  return (
    <Card className="shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="mb-0">{t('my_vehicles')}</h4>
        {!showForm && (
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => setShowForm(true)}
          >
            <FontAwesomeIcon icon={faPlus} className="me-1" /> {t('add_vehicle')}
          </Button>
        )}
      </Card.Header>

      <Card.Body>
        {showForm ? (
          <Form onSubmit={handleSubmit} className={isRTL ? 'text-end' : ''}>
            <Form.Group className="mb-3">
              <Form.Label>{t('title')}</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t('brand')}</Form.Label>
                  <Form.Control
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t('model')}</Form.Label>
                  <Form.Control
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t('year')}</Form.Label>
                  <Form.Control
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    min="1900"
                    max={new Date().getFullYear()}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t('price')} ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>{t('location')}</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t('description')}</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t('image_url')}</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </Form.Group>

            <div className="d-flex gap-2 justify-content-end">
              <Button type="submit" variant="primary">
                {editingVehicle ? t('update') : t('save')}
              </Button>
              <Button 
                variant="secondary"
                onClick={() => {
                  setShowForm(false);
                  setEditingVehicle(null);
                  setFormData({
                    title: '',
                    brand: '',
                    model: '',
                    year: '',
                    price: '',
                    location: '',
                    description: '',
                    imageUrl: ''
                  });
                }}
              >
                {t('cancel')}
              </Button>
            </div>
          </Form>
        ) : (
          <Row xs={1} md={2} className="g-4">
            {vehicles.length > 0 ? (
              vehicles.map(vehicle => (
                <Col key={vehicle.id}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between align-items-start">
                        {vehicle.title}
                        <div>
                          <Button 
                            variant="link" 
                            className="p-0 me-2" 
                            onClick={() => handleEdit(vehicle)}
                          >
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </Button>
                          <Button 
                            variant="link" 
                            className="p-0 text-danger" 
                            onClick={() => handleDelete(vehicle.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </div>
                      </Card.Title>
                      <Card.Text as="div">
                        <p className="fs-5 fw-bold text-primary mb-2">${vehicle.price.toLocaleString()}</p>
                        <Row className="mb-2">
                          <Col xs={6}>
                            <p className="mb-1"><strong>{t('brand')}:</strong> {vehicle.brand}</p>
                          </Col>
                          <Col xs={6}>
                            <p className="mb-1"><strong>{t('model')}:</strong> {vehicle.model}</p>
                          </Col>
                          <Col xs={6}>
                            <p className="mb-1"><strong>{t('year')}:</strong> {vehicle.year}</p>
                          </Col>
                          <Col xs={6}>
                            <p className="mb-1"><strong>{t('location')}:</strong> {vehicle.location}</p>
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col xs={12}>
                <p className="text-center text-muted">{t('no_vehicles')}</p>
              </Col>
            )}
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default VehiclesSection;