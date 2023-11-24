import { lazy } from 'react';

const Dashboard = lazy(() => import('pages/Dashboard'));
const Chat = lazy(() => import('pages/Chat'));

const PageRoutes = () => [
  { path: '', element: <Dashboard />, index: true, protected: false },
  { path: 'chat', element: <Chat />, index: true, protected: true },
];

export default PageRoutes;
