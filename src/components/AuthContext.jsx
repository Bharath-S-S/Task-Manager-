import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Authentication Context
const AuthContext = createContext(null);

// Mock users database (in a real app, this would be on the backend)
const mockUsers = [
  {
    id: '1',
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User'
  }
];

// Authentication Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        const foundUser = mockUsers.find(
          u => u.email === email && u.password === password
        );

        if (foundUser) {
          // Create a token (in real app, this would be JWT)
          const token = btoa(JSON.stringify(foundUser));
          
          // Store user and token
          localStorage.setItem('user', JSON.stringify(foundUser));
          localStorage.setItem('token', token);
          
          setUser(foundUser);
          resolve(foundUser);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 500);
    });
  };

  // Signup function
  const signup = async (email, password, name) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        // Check if user already exists
        const existingUser = mockUsers.find(u => u.email === email);
        
        if (existingUser) {
          reject(new Error('User with this email already exists'));
          return;
        }

        // Create new user
        const newUser = {
          id: String(mockUsers.length + 1),
          email,
          password,
          name
        };

        // In a real app, you would save this to a database
        mockUsers.push(newUser);

        // Create a token (in real app, this would be JWT)
        const token = btoa(JSON.stringify(newUser));
        
        // Store user and token
        localStorage.setItem('user', JSON.stringify(newUser));
        localStorage.setItem('token', token);
        
        setUser(newUser);
        resolve(newUser);
      }, 500);
    });
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  // Get authentication token
  const getToken = () => {
    return localStorage.getItem('token');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        signup, 
        logout, 
        isLoading, 
        getToken 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
