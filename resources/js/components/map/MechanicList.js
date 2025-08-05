// import React, { useContext } from 'react';
// import { LanguageContext } from '../../contexts/LanguageContext';
// import './MechanicList.css';

// const MechanicList = ({ mechanics }) => {
//   const { t } = useContext(LanguageContext);

//   if (mechanics.length === 0) {
//     return (
//       <div className="mechanic-list empty-list">
//         <p>{t('no_mechanics_found')}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mechanic-list">
//       <h2>{t('nearby_mechanics')}</h2>
//       <div className="mechanics">
//         {mechanics.map(mechanic => (
//           <div key={mechanic.id} className="mechanic-card">
//             <div className="mechanic-info">
//               <h3>{mechanic.name}</h3>
//               <div className="rating">
//                 <span className="stars">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className={i < Math.floor(mechanic.rating) ? 'star filled' : 'star'}>
//                       ★
//                     </span>
//                   ))}
//                 </span>
//                 <span className="rating-value">{mechanic.rating}</span>
//               </div>
//               <p className="distance">{mechanic.distance} {t('km')} {t('away')}</p>
//               <div className="services">
//                 {mechanic.services.map(service => (
//                   <span key={service} className="service-tag">
//                     {t(service)}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="mechanic-actions">
//               <button className="btn-call">{t('call')}</button>
//               <button className="btn-request">{t('request')}</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MechanicList;

import React, { useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { LanguageContext } from '../../contexts/LanguageContext';

const MechanicList = ({ mechanics }) => {
  const { t } = useContext(LanguageContext);

  if (mechanics.length === 0) {
    return (
      <Card className="h-100">
        <Card.Body className="d-flex justify-content-center align-items-center">
          <p className="text-muted">{t('no_mechanics_found')}</p>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="h-100">
      <Card.Header>
        <h5 className="mb-0">{t('nearby_mechanics')}</h5>
      </Card.Header>
      <Card.Body className="p-0">
        {mechanics.map(mechanic => (
          <div key={mechanic.id} className="p-3 border-bottom">
            <h5>{mechanic.name}</h5>
            <div className="mb-2">
              <span className="text-warning me-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.floor(mechanic.rating) ? '★' : '☆'}
                  </span>
                ))}
              </span>
              <span>{mechanic.rating}</span>
            </div>
            <p className="mb-2">{mechanic.distance} {t('km')} {t('away')}</p>
            <div className="mb-3">
              {mechanic.services.map(service => (
                <Badge key={service} bg="secondary" className="me-1 mb-1">
                  {t(service)}
                </Badge>
              ))}
            </div>
            <div className="d-flex gap-2">
              <Button variant="success" size="sm">{t('call')}</Button>
              <Button variant="primary" size="sm">{t('request')}</Button>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default MechanicList;