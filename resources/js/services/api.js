

import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api' || 'http://192.168.1.102:8000/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true // مهم لتعمل مع Sanctum بشكل صحيح
});

// Request interceptor
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    
    if (response) {
      switch (response.status) {
        case 401:
          if (response.config.url !== '/login') {
            localStorage.removeItem('token');
            window.location.href = '/login?session_expired=1';
          }
          break;
        case 403:
          // You can add a generic alert here, or handle it in the component
          break;
        case 419: // CSRF Token Mismatch
          return window.location.reload();
        case 422:
          return Promise.reject(response.data.errors);
        default:
          console.error('Server Error:', response.data);
      }
    } else {
      console.error('Network Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  register: (userData) => API.post('/register', userData),
  login: (credentials) => API.post('/login', credentials),
  logout: () => API.post('/logout'),
  getCurrentUser: () => API.get('/user')
};

// Mechanic services
export const mechanicService = {
  getAllMechanics: (params = {}) => API.get('/mechanics', { params }),
  getMechanicById: (id) => API.get(`/mechanics/${id}`),
  updateProfile: (data) => API.put('/mechanic/profile', data)
};

// Service management
export const serviceService = {
  getMechanicServices: (mechanicId) => API.get(`/mechanics/${mechanicId}/services`),
  getMyServices: () => API.get('/mechanic/services'),
  createService: (serviceData) => API.post('/mechanic/services', serviceData),
  updateService: (id, serviceData) => API.put(`/mechanic/services/${id}`, serviceData),
  deleteService: (id) => API.delete(`/mechanic/services/${id}`)
};

// Vehicle management
export const vehicleService = {
  getMechanicVehicles: (mechanicId) => API.get(`/mechanics/${mechanicId}/vehicles`),
  getMyVehicles: () => API.get('/mechanic/vehicles'),
  createVehicle: (vehicleData) => API.post('/mechanic/vehicles', vehicleData),
  updateVehicle: (id, vehicleData) => API.put(`/mechanic/vehicles/${id}`, vehicleData),
  deleteVehicle: (id) => API.delete(`/mechanic/vehicles/${id}`)
};

// Request management
export const requestService = {
  createRequest: (requestData) => API.post('/request-service', requestData),
  getMyRequests: () => API.get('/my-requests'),
  getMechanicRequests: () => API.get('/mechanic/requests'),
  updateRequestStatus: (id, status) => API.put(`/mechanic/requests/${id}/status`, { status })
};

export default API;