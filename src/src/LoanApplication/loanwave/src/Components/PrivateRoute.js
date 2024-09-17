import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './auth-context';
import { Navigate, useLocation  } from 'react-router-dom';

function isLoggedIn() {
    return document.cookie.includes('username=');
  }
  
  // Function to get the user type from cookies
  function getUserType() {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('userType='))
      ?.split('=')[1];
    return cookieValue;
  }
  
  // Function to check if the user has an existing loan from cookies
  function getLoanExist() {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('isLoanExist='))
      ?.split('=')[1];
    return cookieValue === 'true';
  }

function PrivateRoute({ element, allowedTypes, path }) {
    const location = useLocation(); // Get the current location object inside the component
    const currentPath = location.pathname; // Extract the current path
    const isUserLoggedIn = isLoggedIn();
    const userType = getUserType();
    const isLoanExist = getLoanExist(); // Function to retrieve 'isLoanExist' cookie
  
    if (!isUserLoggedIn) {
      return <Navigate to="/login" replace />;
    }
  
    // Admin user trying to access `/apply-loans`
    if (userType === 'Admin' && path === '/apply-loans') {
      return <Navigate to="/access-denied" replace />;
    }
  
    // Customer user trying to access `/uStatus` or `/user/:username`
    if (userType === 'Customer' && (path === '/uStatus' || path.startsWith('/user/'))) {
      return <Navigate to="/" replace />;
    }
  
    // Customer with an existing loan trying to access `/apply-loans`
    if (userType === 'Customer' && isLoanExist && path === '/apply-loans') {
      return <Navigate to="/already-have-loan" replace />;
    }
  
    // Customer without an existing loan trying to access `/my-loans`
    if (userType === 'Customer' && !isLoanExist && path === '/my-loans') {
      return <Navigate to="/apply-loans" replace />;
    }
  
    return element;
  }
  
  export default PrivateRoute;