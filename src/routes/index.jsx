import { useEffect } from 'react';
import AuthRoutes from './AuthRoutes';
import PageRoutes from './PageRoutes';
import { useLocation } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { isAuthenticated } from './redirects';

const AppRoutes = () => {
  const location = useLocation();
  const auth_token = localStorage.getItem('bearer_token');

  const loggedIn = auth_token !== null;

  useEffect(() => {}, [location]);

  const routes = loggedIn ? PageRoutes(location) : AuthRoutes(location);

  return (
    <Routes>
      <Route>
        {routes.map((route, index) => (
          <Route
            key={index}
            index={route.index}
            path={route.path}
            element={
              route.protected
                ? isAuthenticated(route.element, location.pathname)
                : route.element
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
