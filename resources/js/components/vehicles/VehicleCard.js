import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  const { t } = useContext(LanguageContext);
  
  return (
    <div className="vehicle-card">
      <div className="vehicle-image">
        <img src={vehicle.imageUrl || '/default-vehicle.jpg'} alt={vehicle.title} />
      </div>
      <div className="vehicle-details">
        <h3>{vehicle.title}</h3>
        <div className="vehicle-price">${vehicle.price.toLocaleString()}</div>
        <div className="vehicle-info">
          <p>
            <strong>{t('brand')}:</strong> {vehicle.brand}
          </p>
          <p>
            <strong>{t('model')}:</strong> {vehicle.model}
          </p>
          <p>
            <strong>{t('year')}:</strong> {vehicle.year}
          </p>
          <p>
            <strong>{t('location')}:</strong> {vehicle.location}
          </p>
        </div>
        <p className="vehicle-description">{vehicle.description}</p>
        <div className="vehicle-seller">
          <p>{t('sold_by')}: {vehicle.mechanicName}</p>
        </div>
        <button className="btn-contact">{t('contact_seller')}</button>
      </div>
    </div>
  );
};

export default VehicleCard;