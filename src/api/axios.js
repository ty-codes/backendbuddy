import axios from 'axios';
import { logout } from 'constants';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASEURL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(undefined, error => {
  if (
    error?.response?.status === 401 ||
    error?.response?.data?.message === '401 Unauthorized'
  ) {
    logout();
    return;
  }

  return Promise.reject(error);
});

export const addAuthorizationHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('bearer_token')}`,
  },
});
