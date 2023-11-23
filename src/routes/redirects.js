import { Navigate } from 'react-router-dom';

export const isAuthenticated = (element, pathname) => {
  const token = localStorage.getItem('bearer_token');

  if (token === null) {
    return <Navigate to="/login" state={{ previousUrl: pathname }} />;
  }

  return element;
};
