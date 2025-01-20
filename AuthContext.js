import React, { createContext, useState, useEffect } from 'react';
import { login as loginService, register as registerService } from '../services/authService';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for a logged-in user on component mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const { data } = await loginService(credentials);
      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
    } catch (err) {
      console.error('Login failed:', err.message);
      throw err;
    }
  };

  // Register function
  const register = async (details) => {
    try {
      const { data } = await registerService(details);
      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
    } catch (err) {
      console.error('Registration failed:', err.message);
      throw err;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
