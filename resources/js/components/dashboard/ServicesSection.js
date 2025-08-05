// import React, { useState, useContext, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencilAlt, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { AuthContext } from '../../contexts/AuthContext';
// import { LanguageContext } from '../../contexts/LanguageContext';
// import './DashboardSections.css';

// const ServicesSection = () => {
//   const { currentUser } = useContext(AuthContext);
//   const { t, isRTL } = useContext(LanguageContext);
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [editingService, setEditingService] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: ''
//   });

//   // Fetch mechanic's services
//   useEffect(() => {
//     // This would be replaced with an actual API call
//     const mockServices = [
//       {
//         id: 1,
//         name: 'Engine Diagnostics',
//         description: 'Complete engine diagnostic using computerized equipment',
//         price: 50
//       },
//       {
//         id: 2,
//         name: 'Oil Change',
//         description: 'Full oil change with filter replacement',
//         price: 30
//       },
//       {
//         id: 3,
//         name: 'Brake Service',
//         description: 'Brake pad replacement and brake system inspection',
//         price: 80
//       }
//     ];

//     setTimeout(() => {
//       setServices(mockServices);
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
//     if (editingService) {
//       // Update existing service
//       const updatedServices = services.map(service => 
//         service.id === editingService.id ? 
//         { ...service, ...formData, price: Number(formData.price) } : 
//         service
//       );
//       setServices(updatedServices);
//     } else {
//       // Add new service
//       const newService = {
//         id: Date.now(), // temporary ID
//         ...formData,
//         price: Number(formData.price)
//       };
//       setServices([...services, newService]);
//     }

//     // Reset form
//     setFormData({ name: '', description: '', price: '' });
//     setEditingService(null);
//     setShowForm(false);
//   };

//   const handleEdit = (service) => {
//     setFormData({
//       name: service.name,
//       description: service.description,
//       price: service.price.toString()
//     });
//     setEditingService(service);
//     setShowForm(true);
//   };

//   const handleDelete = (serviceId) => {
//     // This would be replaced with an actual API call
//     if (window.confirm(t('confirm_delete_service'))) {
//       setServices(services.filter(service => service.id !== serviceId));
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
//         <h2>{t('services')}</h2>
//         {!showForm && (
//           <button 
//             className="btn-add" 
//             onClick={() => setShowForm(true)}
//           >
//             <FontAwesomeIcon icon={faPlus} /> {t('add_service')}
//           </button>
//         )}
//       </div>

//       {showForm ? (
//         <form onSubmit={handleSubmit} className={isRTL ? 'rtl' : ''}>
//           <div className="form-group">
//             <label htmlFor="name">{t('service_name')}</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
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
//             <label htmlFor="price">{t('price')} ($)</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               min="0"
//               step="0.01"
//               required
//             />
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="btn-save">
//               {editingService ? t('update') : t('save')}
//             </button>
//             <button 
//               type="button" 
//               className="btn-cancel"
//               onClick={() => {
//                 setShowForm(false);
//                 setEditingService(null);
//                 setFormData({ name: '', description: '', price: '' });
//               }}
//             >
//               {t('cancel')}
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="service-list">
//           {services.length > 0 ? (
//             services.map(service => (
//               <div key={service.id} className="service-card">
//                 <h3>{service.name}</h3>
//                 <p>{service.description}</p>
//                 <p className="service-price">${service.price}</p>
//                 <div className="service-actions">
//                   <button 
//                     className="btn-edit-small" 
//                     onClick={() => handleEdit(service)}
//                   >
//                     <FontAwesomeIcon icon={faPencilAlt} />
//                   </button>
//                   <button 
//                     className="btn-delete" 
//                     onClick={() => handleDelete(service.id)}
//                   >
//                     <FontAwesomeIcon icon={faTrash} />
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>{t('no_services')}</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServicesSection;



import React, { useState, useContext, useEffect } from 'react';
import { Card, Button, Form, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../contexts/AuthContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const ServicesSection = () => {
  const { currentUser } = useContext(AuthContext);
  const { t, isRTL } = useContext(LanguageContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  // Fetch mechanic's services
  useEffect(() => {
    // This would be replaced with an actual API call
    const mockServices = [
      {
        id: 1,
        name: 'Engine Diagnostics',
        description: 'Complete engine diagnostic using computerized equipment',
        price: 50
      },
      {
        id: 2,
        name: 'Oil Change',
        description: 'Full oil change with filter replacement',
        price: 30
      },
      {
        id: 3,
        name: 'Brake Service',
        description: 'Brake pad replacement and brake system inspection',
        price: 80
      }
    ];

    setTimeout(() => {
      setServices(mockServices);
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
    if (editingService) {
      // Update existing service
      const updatedServices = services.map(service => 
        service.id === editingService.id ? 
        { ...service, ...formData, price: Number(formData.price) } : 
        service
      );
      setServices(updatedServices);
    } else {
      // Add new service
      const newService = {
        id: Date.now(), // temporary ID
        ...formData,
        price: Number(formData.price)
      };
      setServices([...services, newService]);
    }

    // Reset form
    setFormData({ name: '', description: '', price: '' });
    setEditingService(null);
    setShowForm(false);
  };

  const handleEdit = (service) => {
    setFormData({
      name: service.name,
      description: service.description,
      price: service.price.toString()
    });
    setEditingService(service);
    setShowForm(true);
  };

  const handleDelete = (serviceId) => {
    // This would be replaced with an actual API call
    if (window.confirm(t('confirm_delete_service'))) {
      setServices(services.filter(service => service.id !== serviceId));
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
        <h4 className="mb-0">{t('services')}</h4>
        {!showForm && (
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => setShowForm(true)}
          >
            <FontAwesomeIcon icon={faPlus} className="me-1" /> {t('add_service')}
          </Button>
        )}
      </Card.Header>

      <Card.Body>
        {showForm ? (
          <Form onSubmit={handleSubmit} className={isRTL ? 'text-end' : ''}>
            <Form.Group className="mb-3">
              <Form.Label>{t('service_name')}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
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
              <Form.Label>{t('price')} ($)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
              />
            </Form.Group>

            <div className="d-flex gap-2 justify-content-end">
              <Button type="submit" variant="primary">
                {editingService ? t('update') : t('save')}
              </Button>
              <Button 
                variant="secondary"
                onClick={() => {
                  setShowForm(false);
                  setEditingService(null);
                  setFormData({ name: '', description: '', price: '' });
                }}
              >
                {t('cancel')}
              </Button>
            </div>
          </Form>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {services.length > 0 ? (
              services.map(service => (
                <Col key={service.id}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between align-items-start">
                        {service.name}
                        <div>
                          <Button 
                            variant="link" 
                            className="p-0 me-2" 
                            onClick={() => handleEdit(service)}
                          >
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </Button>
                          <Button 
                            variant="link" 
                            className="p-0 text-danger" 
                            onClick={() => handleDelete(service.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </div>
                      </Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                      <Badge bg="primary" className="fs-6">${service.price}</Badge>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col xs={12}>
                <p className="text-center text-muted">{t('no_services')}</p>
              </Col>
            )}
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default ServicesSection;