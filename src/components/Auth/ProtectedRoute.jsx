import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();

  // If still loading, show a loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
