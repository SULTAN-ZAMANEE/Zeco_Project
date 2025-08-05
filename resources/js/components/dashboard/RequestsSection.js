// import React, { useState, useContext, useEffect } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
// import { LanguageContext } from '../../contexts/LanguageContext';
// import './DashboardSections.css';

// const RequestsSection = () => {
//   const { currentUser } = useContext(AuthContext);
//   const { t, isRTL } = useContext(LanguageContext);
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState('all');

//   // Fetch mechanic's service requests
//   useEffect(() => {
//     // This would be replaced with an actual API call
//     const mockRequests = [
//       {
//         id: 1,
//         customerName: 'Mohammed Ali',
//         customerPhone: '+249123456789',
//         serviceType: 'Engine Diagnostics',
//         vehicleInfo: 'Toyota Corolla 2018',
//         description: 'Car is making strange noises when accelerating',
//         status: 'pending',
//         date: '2023-07-15T10:30:00'
//       },
//       {
//         id: 2,
//         customerName: 'Sara Ahmed',
//         customerPhone: '+249987654321',
//         serviceType: 'Oil Change',
//         vehicleInfo: 'Honda Civic 2019',
//         description: 'Regular maintenance',
//         status: 'accepted',
//         date: '2023-07-16T14:00:00'
//       },
//       {
//         id: 3,
//         customerName: 'Ibrahim Hassan',
//         customerPhone: '+249555666777',
//         serviceType: 'Brake Service',
//         vehicleInfo: 'Hyundai Elantra 2017',
//         description: 'Brakes are squeaking',
//         status: 'completed',
//         date: '2023-07-10T09:15:00'
//       },
//       {
//         id: 4,
//         customerName: 'Fatima Omar',
//         customerPhone: '+249111222333',
//         serviceType: 'Battery Replacement',
//         vehicleInfo: 'Kia Sportage 2020',
//         description: 'Car won\'t start',
//         status: 'rejected',
//         date: '2023-07-12T16:45:00'
//       }
//     ];

//     setTimeout(() => {
//       setRequests(mockRequests);
//       setLoading(false);
//     }, 500);
//   }, []);

//   const handleStatusChange = (requestId, newStatus) => {
//     // This would be replaced with an actual API call
//     setRequests(requests.map(request => 
//       request.id === requestId ? { ...request, status: newStatus } : request
//     ));
//   };

//   const filteredRequests = filter === 'all' 
//     ? requests 
//     : requests.filter(request => request.status === filter);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleString();
//   };

//   const getStatusClass = (status) => {
//     switch (status) {
//       case 'pending': return 'status-pending';
//       case 'accepted': return 'status-accepted';
//       case 'completed': return 'status-completed';
//       case 'rejected': return 'status-rejected';
//       default: return '';
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
//         <h2>{t('requests')}</h2>
//         <div className="filter-buttons">
//           <button 
//             className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
//             onClick={() => setFilter('all')}
//           >
//             {t('all')}
//           </button>
//           <button 
//             className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
//             onClick={() => setFilter('pending')}
//           >
//             {t('pending')}
//           </button>
//           <button 
//             className={`filter-btn ${filter === 'accepted' ? 'active' : ''}`}
//             onClick={() => setFilter('accepted')}
//           >
//             {t('accepted')}
//           </button>
//           <button 
//             className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
//             onClick={() => setFilter('completed')}
//           >
//             {t('completed')}
//           </button>
//           <button 
//             className={`filter-btn ${filter === 'rejected' ? 'active' : ''}`}
//             onClick={() => setFilter('rejected')}
//           >
//             {t('rejected')}
//           </button>
//         </div>
//       </div>

//       <div className="request-list">
//         {filteredRequests.length > 0 ? (
//           filteredRequests.map(request => (
//             <div key={request.id} className={`request-item ${isRTL ? 'rtl' : ''}`}>
//               <div className="request-header">
//                 <h3>{request.serviceType}</h3>
//                 <span className={`request-status ${getStatusClass(request.status)}`}>
//                   {t(request.status)}
//                 </span>
//               </div>
              
//               <div className="request-details">
//                 <p><strong>{t('customer')}:</strong> {request.customerName}</p>
//                 <p><strong>{t('phone')}:</strong> {request.customerPhone}</p>
//                 <p><strong>{t('vehicle')}:</strong> {request.vehicleInfo}</p>
//                 <p><strong>{t('description')}:</strong> {request.description}</p>
//                 <p><strong>{t('date')}:</strong> {formatDate(request.date)}</p>
//               </div>
              
//               <div className="request-actions">
//                 {request.status === 'pending' && (
//                   <>
//                     <button 
//                       className="btn-accept"
//                       onClick={() => handleStatusChange(request.id, 'accepted')}
//                     >
//                       {t('accept')}
//                     </button>
//                     <button 
//                       className="btn-reject"
//                       onClick={() => handleStatusChange(request.id, 'rejected')}
//                     >
//                       {t('reject')}
//                     </button>
//                   </>
//                 )}
                
//                 {request.status === 'accepted' && (
//                   <button 
//                     className="btn-complete"
//                     onClick={() => handleStatusChange(request.id, 'completed')}
//                   >
//                     {t('mark_complete')}
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>{t('no_requests')}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RequestsSection;


import React, { useState, useContext, useEffect } from 'react';
import { Card, Button, Badge, Spinner, ButtonGroup, ListGroup } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const RequestsSection = () => {
  const { currentUser } = useContext(AuthContext);
  const { t, isRTL } = useContext(LanguageContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Fetch mechanic's service requests
  useEffect(() => {
    // This would be replaced with an actual API call
    const mockRequests = [
      {
        id: 1,
        customerName: 'Mohammed Ali',
        customerPhone: '+249123456789',
        serviceType: 'Engine Diagnostics',
        vehicleInfo: 'Toyota Corolla 2018',
        description: 'Car is making strange noises when accelerating',
        status: 'pending',
        date: '2023-07-15T10:30:00'
      },
      {
        id: 2,
        customerName: 'Sara Ahmed',
        customerPhone: '+249987654321',
        serviceType: 'Oil Change',
        vehicleInfo: 'Honda Civic 2019',
        description: 'Regular maintenance',
        status: 'accepted',
        date: '2023-07-16T14:00:00'
      },
      {
        id: 3,
        customerName: 'Ibrahim Hassan',
        customerPhone: '+249555666777',
        serviceType: 'Brake Service',
        vehicleInfo: 'Hyundai Elantra 2017',
        description: 'Brakes are squeaking',
        status: 'completed',
        date: '2023-07-10T09:15:00'
      },
      {
        id: 4,
        customerName: 'Fatima Omar',
        customerPhone: '+249111222333',
        serviceType: 'Battery Replacement',
        vehicleInfo: 'Kia Sportage 2020',
        description: 'Car won\'t start',
        status: 'rejected',
        date: '2023-07-12T16:45:00'
      }
    ];

    setTimeout(() => {
      setRequests(mockRequests);
      setLoading(false);
    }, 500);
  }, []);

  const handleStatusChange = (requestId, newStatus) => {
    // This would be replaced with an actual API call
    setRequests(requests.map(request => 
      request.id === requestId ? { ...request, status: newStatus } : request
    ));
  };

  const filteredRequests = filter === 'all' 
    ? requests 
    : requests.filter(request => request.status === filter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending': return 'warning';
      case 'accepted': return 'info';
      case 'completed': return 'success';
      case 'rejected': return 'danger';
      default: return 'secondary';
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
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">{t('requests')}</h4>
        </div>
        <ButtonGroup className="w-100">
          <Button 
            variant={filter === 'all' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('all')}
          >
            {t('all')}
          </Button>
          <Button 
            variant={filter === 'pending' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('pending')}
          >
            {t('pending')}
          </Button>
          <Button 
            variant={filter === 'accepted' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('accepted')}
          >
            {t('accepted')}
          </Button>
          <Button 
            variant={filter === 'completed' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('completed')}
          >
            {t('completed')}
          </Button>
          <Button 
            variant={filter === 'rejected' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('rejected')}
          >
            {t('rejected')}
          </Button>
        </ButtonGroup>
      </Card.Header>

      <Card.Body className={isRTL ? 'text-end' : ''}>
        {filteredRequests.length > 0 ? (
          <ListGroup variant="flush">
            {filteredRequests.map(request => (
              <ListGroup.Item key={request.id} className="border-bottom py-3">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 className="mb-0">{request.serviceType}</h5>
                  <Badge bg={getStatusBadge(request.status)}>
                    {t(request.status)}
                  </Badge>
                </div>
                
                <div className="mb-3">
                  <p className="mb-1"><strong>{t('customer')}:</strong> {request.customerName}</p>
                  <p className="mb-1"><strong>{t('phone')}:</strong> {request.customerPhone}</p>
                  <p className="mb-1"><strong>{t('vehicle')}:</strong> {request.vehicleInfo}</p>
                  <p className="mb-1"><strong>{t('description')}:</strong> {request.description}</p>
                  <p className="mb-1"><strong>{t('date')}:</strong> {formatDate(request.date)}</p>
                </div>
                
                <div className="d-flex gap-2 justify-content-end">
                  {request.status === 'pending' && (
                    <>
                      <Button 
                        variant="success" 
                        size="sm"
                        onClick={() => handleStatusChange(request.id, 'accepted')}
                      >
                        {t('accept')}
                      </Button>
                      <Button 
                        variant="danger" 
                        size="sm"
                        onClick={() => handleStatusChange(request.id, 'rejected')}
                      >
                        {t('reject')}
                      </Button>
                    </>
                  )}
                  
                  {request.status === 'accepted' && (
                    <Button 
                      variant="success" 
                      size="sm"
                      onClick={() => handleStatusChange(request.id, 'completed')}
                    >
                      {t('mark_complete')}
                    </Button>
                  )}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p className="text-center text-muted">{t('no_requests')}</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default RequestsSection;