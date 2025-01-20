import axios from 'axios';

export const login = async (data) => {
  return axios.post('/api/auth/login', data);
};

export const register = async (data) => {
  return axios.post('/api/auth/register', data);
};
