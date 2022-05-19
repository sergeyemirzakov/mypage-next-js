import { createContext } from 'react';

export const AppContext = createContext<any>(null);

export const AppContextProvider = ({ children }: any) => {
  return <AppContext.Provider value={''}>{children}</AppContext.Provider>;
};
