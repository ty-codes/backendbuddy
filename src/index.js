import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import UserProvider from './context/UserContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from 'store';
import AppProvider from 'context/AppContext';

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    refetchOnWindowFocus: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <AppProvider>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </UserProvider>
    </AppProvider>
  </Provider>
  // </React.StrictMode>,
);

serviceWorkerRegistration.register();

reportWebVitals();
