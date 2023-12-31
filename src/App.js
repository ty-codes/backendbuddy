import React, { Suspense, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PageLoader } from './components';
import PageRoutes from 'routes';
import './App.scss';
import PageLayout from 'layout/PageLayout';

function App() {
  const theme = useMemo(
    () => ({
      black700: 'rgba(0, 0, 0, 0.7)',
      black: '#000000',
      white: '#fff',
      grey: '#AFAFAF',
      red: '#D32600',
      primaryColor: '#39AC6E',
    }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageLayout>
          <Suspense fallback={<PageLoader />}>
            <PageRoutes />
          </Suspense>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
