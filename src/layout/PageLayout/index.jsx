import { useEffect } from 'react';
import { useLocation } from 'react-router';
import LoggedInLayout from 'layout/LoggedInLayout';
import LoggedOutLayout from 'layout/LoggedOutLayout';

const PageLayout = ({ children }) => {
  const location = useLocation();
  const auth_token = localStorage.getItem('bearer_token');
  const isAuthenticated = auth_token !== null;

  useEffect(() => {}, [location]);

  return isAuthenticated ? (
    <LoggedInLayout>{children}</LoggedInLayout>
  ) : (
    <LoggedOutLayout>{children}</LoggedOutLayout>
  );
};

export default PageLayout;
