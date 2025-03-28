import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: '/api', // Your API base URL
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    
    // If token exists, add it to the headers
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If unauthorized (token expired or invalid), logout
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      // Redirect to login page or show login modal
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;