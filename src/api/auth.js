import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASEURL || 'localhost:8000'}`,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const logIn = data => api.post('/signin', data);
