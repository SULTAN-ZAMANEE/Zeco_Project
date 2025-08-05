// import React, { useContext } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import { LanguageContext } from '../../contexts/LanguageContext';
// import 'leaflet/dist/leaflet.css';
// import './MapComponent.css';

// // Fix for default marker icons in Leaflet with webpack
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// const MapComponent = ({ userLocation, mechanics }) => {
//   const { t } = useContext(LanguageContext);
  
//   // Fix for default marker icons
//   const defaultIcon = new Icon({
//     iconUrl: markerIcon,
//     iconRetinaUrl: markerIconRetina,
//     shadowUrl: markerShadow,
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41]
//   });

//   const mechanicIcon = new Icon({
//     iconUrl: '/mechanic-marker.png', // You'll need to add this image to public folder
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
//     popupAnchor: [0, -32]
//   });

//   if (!userLocation) {
//     return <div className="map-loading">{t('loading_map')}...</div>;
//   }

//   return (
//     <MapContainer 
//       center={[userLocation.lat, userLocation.lng]} 
//       zoom={14} 
//       style={{ height: '500px', width: '100%' }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
      
//       {/* User location marker */}
//       <Marker position={[userLocation.lat, userLocation.lng]} icon={defaultIcon}>
//         <Popup>{t('your_location')}</Popup>
//       </Marker>
      
//       {/* Search radius circle */}
//       <Circle 
//         center={[userLocation.lat, userLocation.lng]}
//         radius={5000} // 5km radius
//         pathOptions={{ fillColor: 'blue', fillOpacity: 0.1, color: 'blue', weight: 1 }}
//       />
      
//       {/* Mechanic markers */}
//       {mechanics.map(mechanic => (
//         <Marker 
//           key={mechanic.id}
//           position={[mechanic.location.lat, mechanic.location.lng]}
//           icon={mechanicIcon}
//         >
//           <Popup>
//             <div className="mechanic-popup">
//               <h3>{mechanic.name}</h3>
//               <p>{t('rating')}: {mechanic.rating}/5</p>
//               <p>{t('distance')}: {mechanic.distance} {t('km')}</p>
//               <div className="popup-actions">
//                 <button className="btn-call">{t('call_now')}</button>
//                 <button className="btn-request">{t('send_request')}</button>
//               </div>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default MapComponent;


import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Button, Spinner } from 'react-bootstrap';
import { LanguageContext } from '../../contexts/LanguageContext';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with webpack
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = ({ userLocation, mechanics }) => {
  const { t } = useContext(LanguageContext);
  
  // Fix for default marker icons
  const defaultIcon = new Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const mechanicIcon = new Icon({
    iconUrl: '/mechanic-marker.png', // You'll need to add this image to public folder
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  if (!userLocation) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: '500px' }}>
        <div className="text-center">
          <Spinner animation="border" role="status" />
          <p className="mt-2">{t('loading_map')}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shadow-sm rounded overflow-hidden">
      <MapContainer 
        center={[userLocation.lat, userLocation.lng]} 
        zoom={14} 
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* User location marker */}
        <Marker position={[userLocation.lat, userLocation.lng]} icon={defaultIcon}>
          <Popup>{t('your_location')}</Popup>
        </Marker>
        
        {/* Search radius circle */}
        <Circle 
          center={[userLocation.lat, userLocation.lng]}
          radius={5000} // 5km radius
          pathOptions={{ fillColor: 'blue', fillOpacity: 0.1, color: 'blue', weight: 1 }}
        />
        
        {/* Mechanic markers */}
        {mechanics.map(mechanic => (
          <Marker 
            key={mechanic.id}
            position={[mechanic.location.lat, mechanic.location.lng]}
            icon={mechanicIcon}
          >
            <Popup>
              <div>
                <h5 className="mb-2">{mechanic.name}</h5>
                <p className="mb-1">{t('rating')}: {mechanic.rating}/5</p>
                <p className="mb-2">{t('distance')}: {mechanic.distance} {t('km')}</p>
                <div className="d-flex gap-2">
                  <Button size="sm" variant="success">{t('call_now')}</Button>
                  <Button size="sm" variant="primary">{t('send_request')}</Button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;