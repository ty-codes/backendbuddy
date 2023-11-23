import { lazy } from 'react';

const Dashboard = lazy(() => import('pages/Dashboard'));

const PageRoutes = () => [
  { path: '', element: <Dashboard />, index: true, protected: false },
  ];

export default PageRoutes;
