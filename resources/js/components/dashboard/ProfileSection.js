// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
// import { LanguageContext } from '../../contexts/LanguageContext';
// import './DashboardSections.css';

// const ProfileSection = () => {
//   const { currentUser } = useContext(AuthContext);
//   const { t, isRTL } = useContext(LanguageContext);
//   const [editing, setEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: currentUser?.fullName || '',
//     email: currentUser?.email || '',
//     phoneNumber: currentUser?.phoneNumber || '',
//     address: currentUser?.address || '',
//     bio: currentUser?.bio || ''
//   });
  
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // This would be replaced with an actual API call
//     console.log('Updated profile:', formData);
//     setEditing(false);
//   };
  
//   return (
//     <div className="dashboard-section">
//       <div className="section-header">
//         <h2>{t('profile')}</h2>
//         {!editing && (
//           <button 
//             className="btn-edit" 
//             onClick={() => setEditing(true)}
//           >
//             {t('edit_profile')}
//           </button>
//         )}
//       </div>
      
//       {editing ? (
//         <form onSubmit={handleSubmit} className={isRTL ? 'rtl' : ''}>
//           <div className="form-group">
//             <label htmlFor="fullName">{t('full_name')}</label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="email">{t('email')}</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               disabled
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="phoneNumber">{t('phone_number')}</label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="address">{t('address')}</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="bio">{t('bio')}</label>
//             <textarea
//               id="bio"
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               rows="4"
//             ></textarea>
//           </div>
          
//           <div className="form-actions">
//             <button type="submit" className="btn-save">
//               {t('save')}
//             </button>
//             <button 
//               type="button" 
//               className="btn-cancel"
//               onClick={() => setEditing(false)}
//             >
//               {t('cancel')}
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className={`profile-info ${isRTL ? 'rtl' : ''}`}>
//           <div className="info-group">
//             <label>{t('full_name')}:</label>
//             <p>{formData.fullName}</p>
//           </div>
          
//           <div className="info-group">
//             <label>{t('email')}:</label>
//             <p>{formData.email}</p>
//           </div>
          
//           <div className="info-group">
//             <label>{t('phone_number')}:</label>
//             <p>{formData.phoneNumber}</p>
//           </div>
          
//           <div className="info-group">
//             <label>{t('address')}:</label>
//             <p>{formData.address || '-'}</p>
//           </div>
          
//           <div className="info-group">
//             <label>{t('bio')}:</label>
//             <p>{formData.bio || '-'}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileSection;


import React, { useState, useContext } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const ProfileSection = () => {
  const { currentUser } = useContext(AuthContext);
  const { t, isRTL } = useContext(LanguageContext);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: currentUser?.fullName || '',
    email: currentUser?.email || '',
    phoneNumber: currentUser?.phoneNumber || '',
    address: currentUser?.address || '',
    bio: currentUser?.bio || ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This would be replaced with an actual API call
    console.log('Updated profile:', formData);
    setEditing(false);
  };
  
  return (
    <Card className="shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="mb-0">{t('profile')}</h4>
        {!editing && (
          <Button 
            variant="outline-primary" 
            size="sm"
            onClick={() => setEditing(true)}
          >
            {t('edit_profile')}
          </Button>
        )}
      </Card.Header>
      
      <Card.Body className={isRTL ? 'text-end' : ''}>
        {editing ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>{t('full_name')}</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
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
                disabled
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>{t('phone_number')}</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>{t('address')}</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>{t('bio')}</Form.Label>
              <Form.Control
                as="textarea"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
              />
            </Form.Group>
            
            <div className="d-flex gap-2 justify-content-end">
              <Button type="submit" variant="primary">
                {t('save')}
              </Button>
              <Button 
                variant="secondary"
                onClick={() => setEditing(false)}
              >
                {t('cancel')}
              </Button>
            </div>
          </Form>
        ) : (
          <Row className="g-3">
            <Col xs={12} md={6}>
              <p className="fw-bold mb-1">{t('full_name')}:</p>
              <p>{formData.fullName}</p>
            </Col>
            
            <Col xs={12} md={6}>
              <p className="fw-bold mb-1">{t('email')}:</p>
              <p>{formData.email}</p>
            </Col>
            
            <Col xs={12} md={6}>
              <p className="fw-bold mb-1">{t('phone_number')}:</p>
              <p>{formData.phoneNumber}</p>
            </Col>
            
            <Col xs={12} md={6}>
              <p className="fw-bold mb-1">{t('address')}:</p>
              <p>{formData.address || '-'}</p>
            </Col>
            
            <Col xs={12}>
              <p className="fw-bold mb-1">{t('bio')}:</p>
              <p>{formData.bio || '-'}</p>
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProfileSection;