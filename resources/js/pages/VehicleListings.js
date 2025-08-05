import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import VehicleCard from '../components/vehicles/VehicleCard';
import './VehicleListings.css';
import { vehicleService } from '../services/api';
import useApi from '../hooks/useApi';

// // Inside component:
// const { execute: fetchVehicles, loading, error } = useApi(vehicleService.getMechanicVehicles);

// useEffect(() => {
//   fetchVehicles()
//     .then(data => {
//       setVehicles(data);
//     })
//     .catch(err => {
//       console.error('Error fetching vehicles:', err);
//     });
// }, [fetchVehicles]);

// if (loading) {
//   return <div>Loading...</div>; // or a loading spinner 
// }



const VehicleListings = () => {
  const { t, isRTL } = useContext(LanguageContext);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    brand: '',
    location: ''
  });
  const [sortBy, setSortBy] = useState('newest');
  
  // Fetch vehicles (mock data for now)
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
        imageUrl: '/images/vehicle1.jpg',
        mechanicId: 1,
        mechanicName: 'Ahmed Mechanics',
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
        imageUrl: '/images/vehicle1.jpg',
        mechanicId: 2,
        mechanicName: 'Omar Auto Shop',
        postedDate: '2023-06-20'
      },
      {
        id: 3,
        title: 'Hyundai Elantra 2017',
        brand: 'Hyundai',
        model: 'Elantra',
        year: 2017,
        price: 9000,
        location: 'Bahri',
        description: 'Good condition Hyundai Elantra, single owner.',
        imageUrl: '/images/vehicle1.jpg',
        mechanicId: 3,
        mechanicName: 'Khartoum Car Care',
        postedDate: '2023-04-10'
      }
    ];
    
    setTimeout(() => {
      setVehicles(mockVehicles);
      setLoading(false);
    }, 1000);
  }, []);
  
  // Filter and sort vehicles
  const filteredVehicles = vehicles.filter(vehicle => {
    if (filters.minPrice && vehicle.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && vehicle.price > Number(filters.maxPrice)) return false;
    if (filters.brand && !vehicle.brand.toLowerCase().includes(filters.brand.toLowerCase())) return false;
    if (filters.location && !vehicle.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    return true;
  });
  
  // Sort vehicles
  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    switch (sortBy) {
      case 'price_low_high':
        return a.price - b.price;
      case 'price_high_low':
        return b.price - a.price;
      case 'newest':
        return new Date(b.postedDate) - new Date(a.postedDate);
      case 'oldest':
        return new Date(a.postedDate) - new Date(b.postedDate);
      default:
        return 0;
    }
  });
  
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>{t('loading')}</p>
      </div>
    );
  }
  
  return (
    <div className="vehicle-listings-container">
      <div className="page-header">
        <h1>{t('vehicle_listings')}</h1>
      </div>
      
      <div className="filters-section">
        <h2>{t('filter_vehicles')}</h2>
        <div className={`filters-form ${isRTL ? 'rtl' : ''}`}>
          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="minPrice">{t('price')} (Min)</label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                min="0"
              />
            </div>
            
            <div className="filter-group">
              <label htmlFor="maxPrice">{t('price')} (Max)</label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                min="0"
              />
            </div>
          </div>
          
          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="brand">{t('brand')}</label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={filters.brand}
                onChange={handleFilterChange}
              />
            </div>
            
            <div className="filter-group">
              <label htmlFor="location">{t('location')}</label>
              <input
                type="text"
                id="location"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
              />
            </div>
          </div>
          
          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="sortBy">{t('sort_by')}</label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">{t('newest_first')}</option>
                <option value="oldest">{t('oldest_first')}</option>
                <option value="price_low_high">{t('price_low_high')}</option>
                <option value="price_high_low">{t('price_high_low')}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="vehicles-grid">
        {sortedVehicles.length > 0 ? (
          sortedVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))
        ) : (
          <div className="no-vehicles">
            <p>{t('no_vehicles')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleListings;