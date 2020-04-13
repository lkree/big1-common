import React, {createContext} from 'react';
import data from '../data/original-catalog-data';

export const CommonDataContext = createContext({});

const CommonDataProvider = ({children}) => (
  <CommonDataContext.Provider value={data}>
    {children}
  </CommonDataContext.Provider>
);

export default CommonDataProvider;