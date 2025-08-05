// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';
// import { LanguageContext } from '../contexts/LanguageContext';
// import './Auth.css';

// const Login = () => {
//   const { login, error } = useContext(AuthContext);
//   const { t, isRTL } = useContext(LanguageContext);
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [loading, setLoading] = useState(false);
  
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
    
//     const success = await login(formData);
//     setLoading(false);
    
//     if (success) {
//       navigate('/');
//     }
//   };
  
//   return (
//     <div className="auth-container">
//       <div className="auth-form-container">
//         <h2>{t('login')}</h2>
        
//         {error && <div className="auth-error">{error}</div>}
        
//         <form onSubmit={handleSubmit} className={isRTL ? 'rtl' : ''}>
//           <div className="form-group">
//             <label htmlFor="email">{t('email')}</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="password">{t('password')}</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <button type="submit" className="btn-primary" disabled={loading}>
//             {loading ? t('loading') : t('login')}
//           </button>
//         </form>
        
//         <p className="auth-redirect">
//           {t('register_prompt')} <Link to="/register">{t('register')}</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthContext';
import { LanguageContext } from '../contexts/LanguageContext';

const Login = () => {
  const { login, error: authError } = useContext(AuthContext);
  const { t, isRTL } = useContext(LanguageContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const success = await login(formData);
    setLoading(false);
    
    if (success) {
      navigate('/');
    }
  };
  
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">{t('login')}</h2>
              
              {(error || authError) && (
                <Alert variant="danger">{error || authError}</Alert>
              )}
              
              <Form onSubmit={handleSubmit} className={isRTL ? 'rtl' : ''}>
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
                
                <Form.Group className="mb-4">
                  <Form.Label>{t('password')}</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <div className="d-grid">
                  <Button 
                    type="submit" 
                    variant="primary"
                    disabled={loading}
                  >
                    {loading ? t('loading') : t('login')}
                  </Button>
                </div>
              </Form>
              
              <div className="text-center mt-3">
                <p>
                  {t('dont_have_account')} <Link to="/register">{t('register')}</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;