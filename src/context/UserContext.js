import { createContext, useContext, useEffect, useState } from 'react';
import { getFromStorage, setToStorage } from '../constants';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getFromStorage('user'));

  useEffect(() => {
    setToStorage('user', user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
