import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    username: null,
    isLoanExist: false,
    userType: null,
  });

  useEffect(() => {
    // Get cookies and update auth state
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key.trim()] = value;
      return acc;
    }, {});

    if (cookies.username && cookies.userType) {
      setAuth({
        isAuthenticated: true,
        username: cookies.username,
        isLoanExist: cookies.isLoanExist === 'true',
        userType: cookies.userType,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
