import { createContext, useContext, useState } from 'react';
import { iphone } from 'assets';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const staticData = Array(20).fill({
    image: iphone,
    name: 'Apple iPhone 13',
    price: '400',
    currency: '$',
  });

  const [data, setData] = useState(staticData);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
